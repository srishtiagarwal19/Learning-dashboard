import Sidebar from "../components/Sidebar";
import SettingsCard from "../components/SettingsCard";
import { supabase } from "../lib/supabase";
import MobileNav from "../components/MobileNav";
export default async function SettingsPage() {
  const { data } = await supabase
    .from("settings")
    .select("*")
    .single();

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-8">
          Settings ⚙️
        </h1>

        {/* Profile Banner */}
        <div
          className="
            bg-gradient-to-r
            from-purple-600
            via-blue-500
            to-cyan-500
            rounded-3xl
            p-8
            mb-8
          "
        >
          <h2 className="text-4xl font-bold">
            👤 Srishti Agarwal
          </h2>

          <p className="mt-2 text-lg">
            Frontend Developer
          </p>

          <p className="opacity-80">
            Level 5 Learner
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <SettingsCard
            title="Username"
            value={data?.username || ""}
          />

          <SettingsCard
            title="Difficulty"
            value={data?.difficulty || ""}
          />

          <SettingsCard
            title="Daily Goal"
            value={data?.daily_goal || ""}
          />

          <SettingsCard
            title="Preferred Topic"
            value={data?.preferred_topic || ""}
          />
        </div>

        {/* Notifications Card */}
        <div
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
            mt-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Notifications 🔔
          </h3>

          <div className="space-y-3 text-lg">
            <p>✅ Course Updates</p>
            <p>✅ Achievement Alerts</p>
            <p>✅ Weekly Summary</p>
          </div>
        </div>
      </main>
    </div>
  );
  <MobileNav />
}