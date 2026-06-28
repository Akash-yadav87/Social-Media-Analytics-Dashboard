import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { contentTypePie } from "../data/mockData";

export default function ContentPieChart() {
  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
      <div className="mb-5">
        <h3 className="text-white font-semibold text-base">Engagement by Content Type</h3>
        <p className="text-gray-400 text-sm mt-0.5">Share of total engagements</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Pie */}
        <div className="flex-shrink-0">
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie
                data={contentTypePie}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {contentTypePie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111827",
                  border: "1px solid #1f2937",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  fontSize: 12,
                }}
                formatter={(value: unknown) => [`${value}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2.5">
          {contentTypePie.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-gray-300 text-xs">{item.name}</span>
              </div>
              <span className="text-white text-xs font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
