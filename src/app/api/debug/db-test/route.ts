import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Test basic database connection
    await prisma.$connect();
    
    // Test if User table exists
    const userCount = await prisma.user.count();
    
    return NextResponse.json({
      status: "success",
      message: "Database connection working",
      userCount,
      DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set'
    });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json({
      status: "error",
      message: error instanceof Error ? error.message : String(error),
      DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set'
    }, { status: 500 });
  }
}
