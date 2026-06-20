export default function Loading() {
  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="animate-pulse space-y-6">
        <div className="h-48 rounded-3xl bg-zinc-800"></div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-72 rounded-3xl bg-zinc-800"></div>
          <div className="h-72 rounded-3xl bg-zinc-800"></div>
          <div className="h-72 rounded-3xl bg-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}