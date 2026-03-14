import { NextResponse } from "next/server";
import { studyDates } from "@/lib/store";

export async function GET() {
  return NextResponse.json({
    history: [...studyDates].reverse()
  });
}