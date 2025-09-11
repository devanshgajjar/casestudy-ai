import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only get case studies for the authenticated user, excluding sample data
    const items = await prisma.CaseStudy.findMany({ 
      where: { 
        userId: session.user.id,
        // Exclude sample case studies by filtering out IDs that start with "sample-"
        NOT: {
          id: {
            startsWith: "sample-"
          }
        }
      },
      orderBy: { updatedAt: "desc" } 
    });
  
    // Parse answers for each item
    const itemsWithParsedAnswers = items.map(item => {
      let parsedAnswers = {};
      try {
        parsedAnswers = item.answers ? JSON.parse(item.answers) : {};
      } catch (error) {
        console.error('Error parsing answers for item', item.id, error);
        parsedAnswers = {};
      }
      return { ...item, answers: parsedAnswers };
    });
    
    return NextResponse.json({ items: itemsWithParsedAnswers });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, template } = body as { title: string; template: string };
    
    // Create case study for the authenticated user
    const cs = await prisma.CaseStudy.create({ 
      data: { 
        title, 
        template, 
        userId: session.user.id, 
        status: "draft" 
      } 
    });
    return NextResponse.json({ id: cs.id }, { status: 201 });
  } catch (error: unknown) {
    console.error("create case study error:", error);
    return NextResponse.json({ error: String(error?.message ?? error) }, { status: 500 });
  }
}


