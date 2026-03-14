type Props = {
  streak: number;
  total: number;
  lastDate: string | null;
};

function formatDate(date: string | null) {
  if (!date) return "Never";
  const d = new Date(date);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function StreakCard({ streak, total, lastDate }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <div className="bg-white rounded-2xl shadow p-6 text-center">
        <div className="text-2xl mb-2">🔥</div>
        <p className="text-gray-500 text-sm">Current Streak</p>
        <p className="text-3xl font-bold">{streak}</p>
        <span className="text-gray-500">days</span>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">
        <div className="text-2xl mb-2">📚</div>
        <p className="text-gray-500 text-sm">Total Study Days</p>
        <p className="text-3xl font-bold">{total}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">
        <div className="text-2xl mb-2">📅</div>
        <p className="text-gray-500 text-sm">Last Studied</p>
        <p className="text-lg font-semibold">{formatDate(lastDate)}</p>
      </div>
    </div>
  );
}