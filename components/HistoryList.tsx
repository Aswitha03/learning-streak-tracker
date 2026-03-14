type Props = {
  dates: string[];
};

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HistoryList({ dates }: Props) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Study History</h2>

      {dates.length === 0 ? (
        <p className="text-gray-500">No study history yet</p>
      ) : (
        <ul className="space-y-2">
          {dates.map((date, i) => (
            <li
              key={i}
              className="border rounded-lg px-3 py-2 bg-gray-50"
            >
              {formatDate(date)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}