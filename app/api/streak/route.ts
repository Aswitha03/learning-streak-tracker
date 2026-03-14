import { NextResponse } from "next/server";
import { calculateStreak } from "@/lib/streakLogic";
import { studyDates } from "@/lib/store";

export async function GET() {

  const streak = calculateStreak(studyDates);

  return NextResponse.json({
    streak,
    totalDays: studyDates.length,
    lastDate: studyDates[studyDates.length - 1] || null
  });
}