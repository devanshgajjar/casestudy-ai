import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { callOpenAIChat } from "@/lib/ai";
import { getTemplate } from "@/lib/schemas";
import { buildSystemPrompt, buildTemplatePrompt, TemplateContract } from "@/lib/ai-assembly";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json().catch(() => ({}));
    const { answers: bodyAnswers, template: bodyTemplate } = body;

    const apiKey = process.env.OPENAI_API_KEY;
    const cs = await prisma.caseStudy.findUnique({ where: { id } });
    if (!cs) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Parse existing answers or use provided ones
    const existingAnswers = JSON.parse(cs.answers || '{}');
    const answers = bodyAnswers || existingAnswers;
    
    // Get template
    const templateId = bodyTemplate || cs.template;
    const template = getTemplate(templateId);
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 400 });
    }

    let markdown: string;
    
    if (!apiKey || apiKey === 'sk-test-key') {
      // Fallback for missing API key
      markdown = generateFallbackContent(cs.title, templateId, answers);
    } else {
      // Build the template contract
      const contract: TemplateContract = {
        template: templateId,
        mode: 'standard',
        inputs: answers
      };

      // Generate prompts using our advanced system
      const systemPrompt = buildSystemPrompt();
      const userPrompt = buildTemplatePrompt(contract, template);

      markdown = await callOpenAIChat({ apiKey, system: systemPrompt, user: userPrompt });
    }

    const updated = await prisma.caseStudy.update({ where: { id }, data: { content: markdown } });
    return NextResponse.json({ content: updated.content });
  } catch (e: any) {
    console.error('AI draft error:', e);
    return NextResponse.json({ error: String(e?.message ?? e) }, { status: 500 });
  }
}

function generateFallbackContent(title: string, templateId: string, answers: Record<string, any>): string {
  const kpi = answers.primary_kpi;
  const delta = kpi && kpi.before && kpi.after ? 
    `${kpi.before}${kpi.unit} → ${kpi.after}${kpi.unit} (**${Math.round(((kpi.after - kpi.before) / kpi.before) * 100)}%**)` : 
    'No metrics provided';

  return `# ${title}

## TL;DR
- ${templateId.toUpperCase()} case study showcasing ${answers.goal || 'design improvements'}
- Primary metric: ${delta}
- Timeframe: ${answers.timeframe || 'Not specified'}

## Problem
${answers.user_problem || answers.why_matters || 'Challenge identified'}

## Solution
${Array.isArray(answers.moves) ? answers.moves.map((m: string, i: number) => `${i + 1}. ${m}`).join('\n') : 
  Array.isArray(answers.changes) ? answers.changes.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n') : 
  'Solution implemented'}

## Results
> **${kpi?.name || 'Primary KPI'}**: ${delta}

${answers.secondary_signal || answers.qual_outcome || 'Additional positive outcomes observed'}

## Key Takeaways
- Data-driven approach validated design decisions
- User-centered methodology led to measurable improvements
- Continued iteration recommended for further optimization`;
}


