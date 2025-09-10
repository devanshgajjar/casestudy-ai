import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const items = await prisma.CaseStudy.findMany({ orderBy: { updatedAt: "desc" } });
  
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
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, template, userId } = body as { title: string; template: string; userId?: string };
    // Ensure a local user exists when auth is disabled
    let ownerId = userId;
    if (!ownerId) {
      // Try to find existing default user
      let defaultUser = await prisma.User.findUnique({ where: { email: "anon@local" } }).catch(() => null);
      
      if (!defaultUser) {
        // Create a new default user (let database generate UUID)
        defaultUser = await prisma.User.create({
          data: { 
            email: "anon@local",
            passwordHash: "no-password" 
          }
        });
      }
      
      ownerId = defaultUser.id;
    }
    const cs = await prisma.CaseStudy.create({ data: { title, template, userId: ownerId!, status: "draft" } });
    return NextResponse.json({ id: cs.id }, { status: 201 });
  } catch (error: unknown) {
    console.error("create case study error:", error);
    return NextResponse.json({ error: String(error?.message ?? error) }, { status: 500 });
  }
}


