# 📊 Daily Learning Streak Tracker

A full-stack web application that helps students maintain consistent learning habits by tracking daily study streaks.

Users can mark their daily study activity, view their current learning streak, check total study days, and explore their study history. The application encourages consistent learning by visually displaying progress and motivating users to maintain their streak.

---

# 🚀 Features

- Mark **"I Studied Today"**
- Track **current study streak**
- View **total study days**
- Display **last study date**
- **Study history page** showing all recorded study dates
- **Weekly streak progress bar**
- **Motivational messages**
- **Study activity heatmap (last 30 days)**
- Interactive **cursor emoji animation**

---

# 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Next.js API Routes**
- **React Hooks**
- **Vercel Deployment**

---

## 🔥 How Streak Logic Works

The streak system tracks how many consecutive days a user studies.  
Each time the user clicks **“I Studied Today”**, the application records the current date and updates the streak accordingly.

### Streak Rules

1. When the user clicks **“I Studied Today”**, today's date is saved in the study history.
2. The system checks whether the user has already marked study for today.
3. If today is already recorded, the system prevents duplicate entries and displays the message:
   
   "You have already marked today."

4. If today is not recorded:
   - The date is added to the study history.
   - The system calculates whether the user studied **yesterday**.

5. If the user studied yesterday, the **streak continues and increases by 1**.

6. If the user missed one or more days, the **streak resets to 1**.

### Example

| Date | Activity | Streak |
|-----|-----|-----|
| 10 March | Studied | 1 |
| 11 March | Studied | 2 |
| 12 March | Studied | 3 |
| 13 March | Missed | Streak breaks |
| 14 March | Studied | 1 |

This logic ensures that streaks grow only when the user studies **on consecutive days**, encouraging consistent daily learning.

---

# ⚙️ Setup Instructions

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Girish1703/learning-streak-tracker.git
