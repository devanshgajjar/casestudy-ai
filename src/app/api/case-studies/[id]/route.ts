import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // Validate ID
    if (!id || id === 'undefined') {
      console.error('Invalid case study ID in GET:', id);
      return NextResponse.json({ error: "Invalid case study ID" }, { status: 400 });
    }
    
    const cs = await prisma.caseStudy.findUnique({ where: { id } });
    if (!cs) return NextResponse.json({ error: "Not found" }, { status: 404 });
    
    let parsedAnswers = {};
    try {
      parsedAnswers = cs.answers ? JSON.parse(cs.answers) : {};
    } catch (error) {
      console.error('Error parsing answers:', error);
      parsedAnswers = {};
    }
    
    return NextResponse.json({ cs: { ...cs, answers: parsedAnswers } });
  } catch (error) {
    console.error('GET /api/case-studies/[id] error:', error);
    return NextResponse.json({ 
      error: "Internal server error", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // Validate ID
    if (!id || id === 'undefined') {
      console.error('Invalid case study ID:', id);
      return NextResponse.json({ error: "Invalid case study ID" }, { status: 400 });
    }
    
    const body = await req.json();
    const { title, status, content, answers } = body as { 
      title?: string; 
      status?: string; 
      content?: string; 
      answers?: Record<string, any>;
    };
    
    const updates: any = {};
    if (title !== undefined) updates.title = title;
    if (status !== undefined) updates.status = status;
    if (content !== undefined) updates.content = content;
    if (answers !== undefined) updates.answers = JSON.stringify(answers);
    
    // Check if case study exists first
    const existingCS = await prisma.caseStudy.findUnique({ where: { id } });
    if (!existingCS) {
      return NextResponse.json({ error: "Case study not found" }, { status: 404 });
    }
    
    const cs = await prisma.caseStudy.update({ where: { id }, data: updates });
    
    let parsedAnswers = {};
    try {
      parsedAnswers = cs.answers ? JSON.parse(cs.answers) : {};
    } catch (error) {
      console.error('Error parsing answers:', error);
      parsedAnswers = {};
    }
    
    return NextResponse.json({ cs: { ...cs, answers: parsedAnswers } });
  } catch (error) {
    console.error('PATCH /api/case-studies/[id] error:', error);
    return NextResponse.json({ 
      error: "Internal server error", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}


