type Props = {
  streak: number;
};

export default function StreakProgress({ streak }: Props) {
  const goal = 7;
  const progress = Math.min((streak / goal) * 100, 100);

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500 mb-2">
        Weekly Streak Goal (7 days)
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        {streak}/7 days completed
      </p>
    </div>
  );
}