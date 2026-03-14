"use client";

import { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import Link from "next/link";

export default function HistoryPage() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 p-6">

      <h1 className="text-3xl font-bold">📅 Study History</h1>

      <HistoryList dates={dates} />

      <Link
        href="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        ← Back to Dashboard
      </Link>

    </main>
  );
}