import { TrendingUp, TrendingDown, Eye, Heart, Percent, Users } from "lucide-react";
import type { MetricCard } from "../data/mockData";

const icons = {
  instagram: Eye,
  youtube:   Heart,
  twitter:   Percent,
  linkedin:  Users,
};

const gradients: Record<string, string> = {
  instagram: "from-pink-500/10 to-pink-600/5",
  youtube:   "from-red-500/10 to-red-600/5",
  twitter:   "from-sky-500/10 to-sky-600/5",
  linkedin:  "from-blue-500/10 to-blue-600/5",
};

const iconBg: Record<string, string> = {
  instagram: "bg-pink-500/15 text-pink-400",
  youtube:   "bg-red-500/15 text-red-400",
  twitter:   "bg-sky-500/15 text-sky-400",
  linkedin:  "bg-blue-500/15 text-blue-400",
};

interface Props {
  card: MetricCard;
  index: number;
}

export default function KPICard({ card }: Props) {
  const Icon = icons[card.platform];
  const isPositive = card.change >= 0;

  return (
    <div
      className={`relative bg-gray-900 border border-gray-800/60 rounded-xl p-5 overflow-hidden
        hover:border-gray-700 transition-all duration-200 group`}
    >
      {/* Subtle gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[card.platform]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg[card.platform]}`}>
            <Icon size={18} />
          </div>
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
              isPositive
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
            {isPositive ? "+" : ""}
            {card.change}%
          </span>
        </div>

        <p className="text-2xl font-bold text-white tracking-tight">{card.value}</p>
        <p className="text-gray-300 text-sm font-medium mt-1">{card.label}</p>
        <p className="text-gray-500 text-xs mt-1">{card.subLabel}</p>
      </div>
    </div>
  );
}
