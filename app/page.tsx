"use client";

import { useEffect, useState } from "react";
import StreakCard from "@/components/StreakCard";
import StudyButton from "@/components/StudyButton";
import StreakProgress from "@/components/StreakProgress";
//import MotivationMessage from "@/components/MotivationMessage";
//import StudyHeatmap from "@/components/StudyHeatmap";
//import CursorEmojiTrail from "@/components/CursorEmojiTrail";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState({
    streak: 0,
    total: 0,
    lastDate: null as string | null,
  });

  const [history, setHistory] = useState<string[]>([]);

  const loadData = async () => {
    try {
      const streakRes = await fetch("/api/streak");
      const streakData = await streakRes.json();

      const historyRes = await fetch("/api/history");
      const historyData = await historyRes.json();

      setData(streakData);
      setHistory(historyData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-10 gap-6">

     
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          📊 Daily Learning Streak Tracker
        </h1>
        <p className="text-gray-500">
          Welcome back. Keep your learning streak alive.
        </p>
      </div>

      {/* Stats Cards */}
      <StreakCard {...data} />

      

      {/* Weekly Progress */}
      <StreakProgress streak={data.streak} />

      

      {/* Study Button */}
      <StudyButton refresh={loadData} />

      {/* History Button */}
      <Link
        href="/history"
        className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-50 transition"
      >
        ⏱ View Study History
      </Link>

    </main>
  );
}