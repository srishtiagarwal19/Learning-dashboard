import Sidebar from "../components/Sidebar";
import AchievementCard from "../components/AchievementCard";
import { supabase } from "../lib/supabase";
import MobileNav from "../components/MobileNav";
export default async function AchievementsPage() {
  const { data: achievements, error } = await supabase
    .from("achievements")
    .select("*");

  if (error) {
    return (
      <div className="text-red-500 p-8">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-8">
          Achievements 🏆
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements?.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              unlocked={achievement.unlocked}
            />
          ))}
        </div>
      </main>
    </div>
  );
  <MobileNav />
}