import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sampleCaseStudies, sampleUsers } from "@/lib/sample-data";

export async function POST() {
  try {
    // Create sample users first
    for (const userData of sampleUsers) {
      await prisma.User.upsert({
        where: { id: userData.id },
        update: {},
        create: userData
      });
    }

    // Create sample case studies
    for (const caseStudyData of sampleCaseStudies) {
      await prisma.CaseStudy.upsert({
        where: { id: caseStudyData.id },
        update: {
          title: caseStudyData.title,
          template: caseStudyData.template,
          status: caseStudyData.status,
          content: caseStudyData.content,
          answers: caseStudyData.answers
        },
        create: caseStudyData
      });
    }

    return NextResponse.json({
      success: true,
      message: "Sample data seeded successfully",
      created: {
        users: sampleUsers.length,
        caseStudies: sampleCaseStudies.length
      }
    });

  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({
      error: "Failed to seed sample data",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
