import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { engagementTrend, platformColors } from "../data/mockData";
import { useState } from "react";

const platforms = ["instagram", "youtube", "twitter", "linkedin"] as const;
const labels: Record<string, string> = {
  instagram: "Instagram",
  youtube:   "YouTube",
  twitter:   "Twitter / X",
  linkedin:  "LinkedIn",
};

function formatYAxis(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return `${value}`;
}

export default function EngagementChart() {
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setHidden((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold text-base">Engagement Trend</h3>
          <p className="text-gray-400 text-sm mt-0.5">30-day engagement across all platforms</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => toggle(p)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                hidden.has(p)
                  ? "border-gray-700 text-gray-500 bg-transparent"
                  : "border-gray-700 text-gray-200 bg-gray-800"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: hidden.has(p) ? "#4b5563" : platformColors[p] }}
              />
              {labels[p]}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={engagementTrend} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatYAxis}
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
            formatter={(value: unknown, name: unknown) => [
              typeof value === "number" ? `${(value / 1000).toFixed(1)}K` : String(value),
              typeof name === "string" ? (labels[name] ?? name) : String(name),
            ]}
          />
          {platforms.map((p) => (
            <Line
              key={p}
              type="monotone"
              dataKey={p}
              stroke={platformColors[p]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
              hide={hidden.has(p)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
