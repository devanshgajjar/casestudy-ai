import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    console.log("Testing case study creation...");
    
    // First, ensure we have a user
    let user;
    try {
      user = await prisma.User.findUnique({ where: { email: "test@debug.com" } });
      if (!user) {
        user = await prisma.User.create({
          data: {
            email: "test@debug.com",
            passwordHash: "test123"
          }
        });
        console.log("Created test user:", user.id);
      }
    } catch (userError) {
      console.error("User creation/lookup error:", userError);
      return NextResponse.json({ 
        error: "User error", 
        details: userError instanceof Error ? userError.message : String(userError) 
      }, { status: 500 });
    }

    // Now try to create a case study
    console.log("Creating case study with userId:", user.id);
    const caseStudy = await prisma.CaseStudy.create({
      data: {
        title: "Debug Test",
        template: "ui-ux",
        userId: user.id,
        status: "draft"
      }
    });

    console.log("Successfully created case study:", caseStudy.id);
    
    return NextResponse.json({
      success: true,
      userId: user.id,
      caseStudyId: caseStudy.id,
      message: "Case study created successfully"
    });

  } catch (error) {
    console.error("Create test error:", error);
    return NextResponse.json({
      error: "Test failed",
      details: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
