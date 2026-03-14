"use client";

import { useState } from "react";

export default function StudyButton({ refresh }: any) {
  const [message, setMessage] = useState("");

  const markStudy = async () => {
    const res = await fetch("/api/study", { method: "POST" });
    const data = await res.json();

    setMessage(data.message);
    refresh();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={markStudy}
        className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-3 rounded-xl shadow-lg"
      >
        ✅ I Studied Today
      </button>

      {message && (
        <p className="text-sm text-gray-600 bg-white px-4 py-2 rounded shadow">
          {message}
        </p>
      )}
    </div>
  );
}