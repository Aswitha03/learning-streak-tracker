"use client";

type Props = {
  dates: string[];
};

export default function StudyHeatmap({ dates }: Props) {
  const days = 30; // show last 30 days
  const today = new Date();

  const studySet = new Set(dates);

  const cells = [];

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const formatted = d.toISOString().split("T")[0];
    const studied = studySet.has(formatted);

    cells.push(
      <div
        key={formatted}
        title={formatted}
        className={`w-6 h-6 rounded ${
          studied ? "bg-green-500" : "bg-gray-200"
        }`}
      />
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">
      <h2 className="font-semibold mb-4">📊 Study Activity (Last 30 Days)</h2>

      <div className="grid grid-cols-10 gap-2">{cells}</div>

      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  );
}