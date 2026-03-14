type Props = {
  streak: number;
};

export default function MotivationMessage({ streak }: Props) {
  let message = "Start your learning journey today 🚀";

  if (streak >= 1) message = "Great start! Keep going 🔥";
  if (streak >= 3) message = "You're building a strong habit 💪";
  if (streak >= 5) message = "Amazing consistency! 🌟";
  if (streak >= 7) message = "You're unstoppable! 🏆";

  return (
    <div className="bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg text-center text-sm">
      {message}
    </div>
  );
}