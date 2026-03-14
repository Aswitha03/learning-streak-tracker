export interface StudyData {
  dates: string[];
}

export function calculateStreak(dates: string[]) {
  if (dates.length === 0) {
    return { streak: 0, total: 0, lastDate: null };
  }

  const sorted = [...dates].sort((a, b) =>
    new Date(b).getTime() - new Date(a).getTime()
  );

  let streak = 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const current = new Date(sorted[i]);
    const prev = new Date(sorted[i + 1]);

    const diff =
      (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return {
    streak,
    total: dates.length,
    lastDate: sorted[0],
  };
}