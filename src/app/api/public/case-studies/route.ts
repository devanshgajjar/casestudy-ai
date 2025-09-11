import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Only get published case studies for public view
    const publishedCaseStudies = await prisma.CaseStudy.findMany({
      where: {
        status: 'published'
      },
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        template: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        answers: true,
        // Include user info for attribution
        user: {
          select: {
            email: true
          }
        }
      }
    });

    // Parse answers for each case study
    const caseStudiesWithParsedAnswers = publishedCaseStudies.map(cs => {
      let parsedAnswers = {};
      try {
        parsedAnswers = cs.answers ? JSON.parse(cs.answers) : {};
      } catch (error) {
        console.error('Error parsing answers for case study', cs.id, error);
        parsedAnswers = {};
      }
      
      return {
        ...cs,
        answers: parsedAnswers,
        // Create a designer name from email (remove domain)
        designer: cs.user.email.split('@')[0]
      };
    });

    return NextResponse.json({ caseStudies: caseStudiesWithParsedAnswers });
  } catch (error) {
    console.error('Error fetching public case studies:', error);
    return NextResponse.json({ 
      error: "Failed to fetch case studies", 
      caseStudies: [] 
    }, { status: 500 });
  }
}
