import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    // Delete all case studies with IDs starting with "sample-"
    const result = await prisma.CaseStudy.deleteMany({
      where: {
        id: {
          startsWith: "sample-"
        }
      }
    });

    // Also delete sample users
    const userResult = await prisma.User.deleteMany({
      where: {
        OR: [
          { id: { startsWith: "sample-user" } },
          { email: { contains: "sample" } }
        ]
      }
    });

    return NextResponse.json({
      success: true,
      deletedCaseStudies: result.count,
      deletedUsers: userResult.count,
      message: "Sample data cleared from production database"
    });
  } catch (error) {
    console.error('Clear samples error:', error);
    return NextResponse.json({
      error: "Failed to clear samples",
      details: String(error)
    }, { status: 500 });
  }
}
