import { KPI, Template, computeKPIDelta } from './schemas';

export interface TemplateContract {
  template: string;
  mode: 'concise' | 'standard' | 'narrative';
  inputs: Record<string, any>;
  kpis?: KPI[];
}

export function buildSystemPrompt(): string {
  return `You are a case-study editor who produces recruiter-grade Markdown content. 

**Core Principles:**
- Be concise, evidence-led, avoid buzzwords
- Always include a TL;DR section at the top (3 bullets max, 2 metrics max)
- Include a Results section with computed deltas
- If data is missing, insert clearly labeled "No data provided" notes without fabricating
- Use industry-standard terminology and proven design patterns
- Focus on impact and outcomes, not just process

**Markdown Structure Requirements:**
- Use ## for main sections (never #)
- Include metric callouts in blockquotes: > **Metric Name**: before → after (**delta**)
- Use tables for comparisons when helpful
- Include specific, actionable insights in the conclusion

**Tone:** Professional but engaging, written for design leaders and recruiters.`;
}

export function buildTemplatePrompt(contract: TemplateContract, template: Template): string {
  const { inputs, mode = 'standard' } = contract;
  
  // Extract KPIs and compute deltas
  const kpis = extractKPIs(inputs, template);
  const kpiSummaries = kpis.map(kpi => {
    const delta = computeKPIDelta(kpi);
    return `${kpi.name}: ${delta.formatted}`;
  });

  // Build context based on template
  let templateContext = '';
  switch (template.id) {
    case 'ui':
      templateContext = buildUIContext(inputs, kpis);
      break;
    case 'ux':
      templateContext = buildUXContext(inputs, kpis);
      break;
    case 'social':
      templateContext = buildSocialContext(inputs, kpis);
      break;
  }

  const wordTarget = mode === 'concise' ? '400-600' : mode === 'standard' ? '800-1200' : '1500+';

  return `Generate a ${template.name.toLowerCase()} following this structure and data:

**Template:** ${template.name}
**Target Length:** ${wordTarget} words
**Mode:** ${mode}

${templateContext}

**Key Metrics:**
${kpiSummaries.length > 0 ? kpiSummaries.join('\n') : 'No metrics provided'}

**Required Sections:**
1. **TL;DR** - 3 bullet points max, include 1-2 key metrics
2. **${getMainSections(template.id).join('**\n3. **')}**
4. **Results** - Lead with metrics, include % changes in bold
5. **Key Takeaways** - 2-3 actionable insights

Make it compelling and data-driven. Use specific numbers and avoid generic statements.`;
}

function extractKPIs(inputs: Record<string, any>, template: Template): KPI[] {
  const kpis: KPI[] = [];
  
  // Find KPI fields in the template
  for (const section of template.sections) {
    for (const field of section.fields) {
      if (field.type === 'kpi' && inputs[field.id]) {
        const kpiData = inputs[field.id];
        if (kpiData.name && kpiData.before !== undefined && kpiData.after !== undefined) {
          kpis.push(kpiData);
        }
      }
    }
  }
  
  return kpis;
}

function buildUIContext(inputs: Record<string, any>, kpis: KPI[]): string {
  return `**Project Overview:**
- Title: ${inputs.title || 'Untitled'}
- Goal: ${inputs.goal || 'Not specified'}
- Product: ${inputs.product || 'Not specified'}
- Audience: ${inputs.audience || 'Not specified'}
- Timeframe: ${inputs.timeframe || 'Not specified'}

**Problem:**
- Issues: ${Array.isArray(inputs.issues) ? inputs.issues.join(', ') : 'Not specified'}
- Impact: ${inputs.why_matters || 'Not specified'}

**Solution:**
- Design moves: ${Array.isArray(inputs.moves) ? inputs.moves.map((m: string, i: number) => `${i + 1}. ${m}`).join('\n') : 'Not specified'}
- Before/after visuals: ${inputs.before ? 'Provided' : 'Not provided'}

**Results:**
- Primary KPI: ${kpis[0] ? `${kpis[0].name} (${kpis[0].before}${kpis[0].unit} → ${kpis[0].after}${kpis[0].unit})` : 'Not provided'}
- Secondary signal: ${inputs.secondary_signal || 'Not provided'}`;
}

function buildUXContext(inputs: Record<string, any>, kpis: KPI[]): string {
  return `**Project Overview:**
- Title: ${inputs.title || 'Untitled'}
- Goal: ${inputs.goal || 'Not specified'}
- Product: ${inputs.product || 'Not specified'}
- Audience: ${inputs.audience || 'Not specified'}
- Timeframe: ${inputs.timeframe || 'Not specified'}

**Problem:**
- User problem: ${inputs.user_problem || 'Not specified'}
- Top task: ${inputs.top_task || 'Not specified'}

**Research:**
- Sources: ${Array.isArray(inputs.sources) ? inputs.sources.join(', ') : 'Not specified'}
- Key insights: ${Array.isArray(inputs.insights) ? inputs.insights.map((i: string, idx: number) => `${idx + 1}. ${i}`).join('\n') : 'Not specified'}

**Solution:**
- UX changes: ${Array.isArray(inputs.changes) ? inputs.changes.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n') : 'Not specified'}
- Artifacts: ${inputs.artifacts ? 'Provided' : 'Not provided'}

**Results:**
- Primary KPI: ${kpis[0] ? `${kpis[0].name} (${kpis[0].before}${kpis[0].unit} → ${kpis[0].after}${kpis[0].unit})` : 'Not provided'}
- Qualitative outcome: ${inputs.qual_outcome || 'Not provided'}`;
}

function buildSocialContext(inputs: Record<string, any>, kpis: KPI[]): string {
  return `**Campaign Overview:**
- Title: ${inputs.title || 'Untitled'}
- Goal: ${inputs.goal || 'Not specified'}
- Product: ${inputs.product || 'Not specified'}
- Audience: ${inputs.audience || 'Not specified'}
- Timeframe: ${inputs.timeframe || 'Not specified'}

**Campaign Setup:**
- Channels: ${Array.isArray(inputs.channels) ? inputs.channels.join(', ') : 'Not specified'}
- Objective: ${inputs.objective || 'Not specified'}

**Creative Strategy:**
- Content pillars: ${Array.isArray(inputs.pillars) ? inputs.pillars.map((p: string, i: number) => `${i + 1}. ${p}`).join('\n') : 'Not specified'}
- Volume & cadence: ${inputs.volume || 'Not specified'}
- Creatives: ${inputs.creatives ? 'Provided' : 'Not provided'}

**Results:**
- Primary KPI: ${kpis[0] ? `${kpis[0].name} (${kpis[0].before}${kpis[0].unit} → ${kpis[0].after}${kpis[0].unit})` : 'Not provided'}
- Secondary signal: ${inputs.secondary_signal || 'Not provided'}`;
}

function getMainSections(templateId: string): string[] {
  switch (templateId) {
    case 'ui':
      return ['Problem', 'Solution', 'Before/After'];
    case 'ux':
      return ['Context', 'Research', 'Solution', 'Validation'];
    case 'social':
      return ['Strategy', 'Creative Execution', 'Distribution'];
    default:
      return ['Context', 'Approach', 'Execution'];
  }
}

export function enrichWithPatterns(inputs: Record<string, any>, templateId: string): string[] {
  const patterns: string[] = [];
  
  if (templateId === 'ui') {
    if (inputs.issues?.includes('low contrast')) patterns.push('Accessibility');
    if (inputs.issues?.includes('confusing hierarchy')) patterns.push('Information Architecture');
    if (inputs.moves?.some((m: string) => m.toLowerCase().includes('cta'))) patterns.push('Conversion Optimization');
  }
  
  if (templateId === 'ux') {
    if (inputs.sources?.includes('usability tests')) patterns.push('User Testing');
    if (inputs.changes?.some((c: string) => c.toLowerCase().includes('flow'))) patterns.push('User Flow Optimization');
    if (inputs.insights?.some((i: string) => i.toLowerCase().includes('friction'))) patterns.push('Friction Reduction');
  }
  
  if (templateId === 'social') {
    if (inputs.channels?.includes('instagram')) patterns.push('Visual Storytelling');
    if (inputs.pillars?.some((p: string) => p.toLowerCase().includes('education'))) patterns.push('Educational Content');
  }
  
  return patterns;
}
