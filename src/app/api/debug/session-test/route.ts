import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    return NextResponse.json({
      hasSession: !!session,
      sessionUserId: session?.user?.id || null,
      userEmail: session?.user?.email || null,
      message: session ? "Session found" : "No session found"
    });
  } catch (error) {
    console.error('Session test error:', error);
    return NextResponse.json({
      error: "Session test failed",
      details: String(error)
    }, { status: 500 });
  }
}
