import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { impressionsReach } from "../data/mockData";

function formatY(value: number): string {
  return `${(value / 1_000_000).toFixed(1)}M`;
}

export default function ImpressionsChart() {
  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
      <div className="mb-5">
        <h3 className="text-white font-semibold text-base">Impressions vs Reach</h3>
        <p className="text-gray-400 text-sm mt-0.5">Platform comparison for current period</p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-indigo-500" />
          <span className="text-gray-400 text-xs">Impressions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-purple-400" />
          <span className="text-gray-400 text-xs">Reach</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={impressionsReach} barGap={4} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis
            dataKey="platform"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatY}
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "10px",
              padding: "10px 14px",
            }}
            labelStyle={{ color: "#9ca3af", fontSize: 12, marginBottom: 6 }}
            itemStyle={{ fontSize: 12 }}
            formatter={(value: unknown) =>
              typeof value === "number"
                ? [`${(value / 1_000_000).toFixed(2)}M`]
                : [String(value)]
            }
          />
          <Bar dataKey="impressions" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={28} />
          <Bar dataKey="reach"       fill="#a78bfa" radius={[4, 4, 0, 0]} maxBarSize={28} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
