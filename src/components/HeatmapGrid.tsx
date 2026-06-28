import { weeklyHeatmap } from "../data/mockData";

function getColor(value: number): string {
  if (value >= 85) return "bg-indigo-500";
  if (value >= 70) return "bg-indigo-400/80";
  if (value >= 55) return "bg-indigo-400/50";
  if (value >= 40) return "bg-indigo-400/30";
  if (value >= 25) return "bg-indigo-400/15";
  return "bg-gray-800";
}

export default function HeatmapGrid() {
  const hours = weeklyHeatmap[0].hours.map((h) => h.hour);

  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
      <div className="mb-5">
        <h3 className="text-white font-semibold text-base">Weekly Posting Heatmap</h3>
        <p className="text-gray-400 text-sm mt-0.5">Engagement score by day and time</p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-gray-500 text-xs">Low</span>
        {["bg-gray-800", "bg-indigo-400/15", "bg-indigo-400/30", "bg-indigo-400/50", "bg-indigo-400/80", "bg-indigo-500"].map(
          (cls) => (
            <span key={cls} className={`w-5 h-3 rounded-sm ${cls}`} />
          )
        )}
        <span className="text-gray-500 text-xs">High</span>
      </div>

      {/* Hour labels */}
      <div className="flex gap-2 mb-2 ml-10">
        {hours.map((h) => (
          <div key={h} className="flex-1 text-center text-gray-500 text-xs">
            {h}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="space-y-2">
        {weeklyHeatmap.map((row) => (
          <div key={row.day} className="flex items-center gap-2">
            <span className="w-8 text-gray-400 text-xs text-right flex-shrink-0">{row.day}</span>
            {row.hours.map((cell) => (
              <div
                key={cell.hour}
                title={`${row.day} ${cell.hour}: Score ${cell.value}`}
                className={`flex-1 h-8 rounded-md ${getColor(cell.value)} transition-all duration-200 hover:ring-2 hover:ring-indigo-400/40 cursor-default flex items-center justify-center`}
              >
                <span className="text-white/60 text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
                  {cell.value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
