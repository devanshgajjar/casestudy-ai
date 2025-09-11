import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateMarketingContent } from "@/lib/marketing-ai";

export async function GET(_req: Request, { params }: { params: Promise<{ designer: string }> }) {
  try {
    const { designer } = await params;
    
    if (!designer || designer === 'undefined') {
      return NextResponse.json({ error: "Invalid designer name" }, { status: 400 });
    }

    // Check if we have cached marketing content
    const cachedContent = await prisma.MarketingContent.findUnique({
      where: { designer }
    });

    // Find all published case studies for this designer
    const caseStudies = await prisma.CaseStudy.findMany({
      where: {
        status: 'published',
        OR: [
          {
            userId: designer // Direct user ID match
          },
          {
            user: {
              email: {
                startsWith: designer + '@'
              }
            }
          },
          {
            user: {
              email: {
                contains: designer
              }
            }
          }
        ]
      },
      orderBy: { updatedAt: "desc" },
      include: {
        user: {
          select: {
            email: true
          }
        }
      }
    });

    if (caseStudies.length === 0) {
      return NextResponse.json({ 
        error: "No published case studies found for this designer" 
      }, { status: 404 });
    }

    // If we have cached content and case study count hasn't changed, return cached version
    if (cachedContent && cachedContent.caseStudyCount === caseStudies.length) {
      return NextResponse.json({ 
        marketingContent: {
          heroTitle: cachedContent.heroTitle,
          heroSubtitle: cachedContent.heroSubtitle,
          highlights: JSON.parse(cachedContent.highlights),
          tagline: cachedContent.tagline
        },
        caseStudyCount: caseStudies.length
      });
    }

    // Parse answers and prepare data for AI
    const caseStudyData = caseStudies.map(cs => {
      let parsedAnswers = {};
      try {
        parsedAnswers = cs.answers ? JSON.parse(cs.answers) : {};
      } catch (error) {
        console.error('Error parsing answers for case study', cs.id, error);
        parsedAnswers = {};
      }
      
      return {
        id: cs.id,
        title: cs.title,
        template: cs.template,
        answers: parsedAnswers,
        designer: cs.user.email.split('@')[0]
      };
    });

    // Generate fresh marketing content using AI
    const marketingContent = await generateMarketingContent(designer, caseStudyData);

    // Cache the new content
    await prisma.MarketingContent.upsert({
      where: { designer },
      update: {
        heroTitle: marketingContent.heroTitle,
        heroSubtitle: marketingContent.heroSubtitle,
        highlights: JSON.stringify(marketingContent.highlights),
        tagline: marketingContent.tagline,
        caseStudyCount: caseStudies.length,
        updatedAt: new Date()
      },
      create: {
        designer,
        heroTitle: marketingContent.heroTitle,
        heroSubtitle: marketingContent.heroSubtitle,
        highlights: JSON.stringify(marketingContent.highlights),
        tagline: marketingContent.tagline,
        caseStudyCount: caseStudies.length
      }
    });

    return NextResponse.json({ 
      marketingContent,
      caseStudyCount: caseStudies.length
    });
  } catch (error) {
    console.error('Error generating marketing content:', error);
    return NextResponse.json({ 
      error: "Failed to generate marketing content" 
    }, { status: 500 });
  }
}
