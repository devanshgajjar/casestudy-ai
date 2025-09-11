import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ 
        error: "No session found",
        hasSession: false 
      });
    }

    // Get all case studies (for debugging)
    const allCaseStudies = await prisma.CaseStudy.findMany({
      select: {
        id: true,
        title: true,
        userId: true,
        status: true,
        template: true
      },
      orderBy: { updatedAt: "desc" }
    });

    // Get user-specific case studies (what should be shown)
    const userCaseStudies = await prisma.CaseStudy.findMany({
      where: { 
        userId: session.user.id,
        NOT: {
          id: {
            startsWith: "sample-"
          }
        }
      },
      select: {
        id: true,
        title: true,
        userId: true,
        status: true,
        template: true
      },
      orderBy: { updatedAt: "desc" }
    });

    return NextResponse.json({
      sessionUserId: session.user.id,
      sessionUserEmail: session.user.email,
      totalCaseStudies: allCaseStudies.length,
      userCaseStudies: userCaseStudies.length,
      allCaseStudies: allCaseStudies,
      userSpecificCaseStudies: userCaseStudies
    });
  } catch (error) {
    console.error('Debug API error:', error);
    return NextResponse.json({
      error: "Debug API failed",
      details: String(error)
    }, { status: 500 });
  }
}
