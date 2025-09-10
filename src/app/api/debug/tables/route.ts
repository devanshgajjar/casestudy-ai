import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Check what tables exist
    const result = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    `;
    
    return NextResponse.json({
      status: "success",
      tables: result,
      DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set'
    });
  } catch (error) {
    console.error("Table inspection error:", error);
    return NextResponse.json({
      status: "error",
      message: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
