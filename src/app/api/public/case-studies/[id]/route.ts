import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // Validate ID
    if (!id || id === 'undefined') {
      return NextResponse.json({ error: "Invalid case study ID" }, { status: 400 });
    }
    
    // Only get if published
    const caseStudy = await prisma.CaseStudy.findFirst({
      where: {
        id: id,
        status: 'published'
      },
      include: {
        user: {
          select: {
            email: true
          }
        }
      }
    });
    
    if (!caseStudy) {
      return NextResponse.json({ error: "Case study not found or not published" }, { status: 404 });
    }
    
    // Parse answers
    let parsedAnswers = {};
    try {
      parsedAnswers = caseStudy.answers ? JSON.parse(caseStudy.answers) : {};
    } catch (error) {
      console.error('Error parsing answers:', error);
      parsedAnswers = {};
    }
    
    const result = {
      ...caseStudy,
      answers: parsedAnswers,
      designer: caseStudy.user.email.split('@')[0]
    };
    
    return NextResponse.json({ caseStudy: result });
  } catch (error) {
    console.error('Error fetching public case study:', error);
    return NextResponse.json({ 
      error: "Internal server error" 
    }, { status: 500 });
  }
}
