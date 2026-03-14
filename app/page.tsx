"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/streak")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Daily Learning Streak Tracker
      </h1>

      <p>Current Streak: {data.streak}</p>
      <p>Total Study Days: {data.totalDays}</p>
      <p>Last Studied: {data.lastStudyDate || "None"}</p>

    </div>
  );
}