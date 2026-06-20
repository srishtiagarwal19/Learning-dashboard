import Sidebar from "./components/Sidebar";
import { supabase } from "./lib/supabase";
import CourseCard from "./components/CourseCard";
import HeroTile from "./components/HeroTile";
import ActivityTile from "./components/ActivityTile";
import MobileNav from "./components/MobileNav";
export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");
const { data: activity } = await supabase
  .from("activity")
  .select("*");
  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-red-500">
        Error: {error.message}
      </main>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <HeroTile />
          </div>

<ActivityTile data={activity || []} />
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon={course.icon_name}
            />
          ))}
        </div>
      </main>
    </div>
  );
  <MobileNav />
}