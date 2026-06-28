import { TrendingUp, TrendingDown, Users, Heart, MessageCircle, Share2 } from "lucide-react";
import type { PlatformOverview } from "../data/mockData";
import { platformColors, formatNumber } from "../data/mockData";

const platformLabel: Record<string, string> = {
  instagram: "Instagram",
  youtube:   "YouTube",
  twitter:   "Twitter / X",
  linkedin:  "LinkedIn",
};

const platformIcon: Record<string, string> = {
  instagram: "IG",
  youtube:   "YT",
  twitter:   "TW",
  linkedin:  "LI",
};

interface Props {
  data: PlatformOverview;
}

export default function PlatformCard({ data }: Props) {
  const isPositive = data.followersChange >= 0;
  const color = platformColors[data.platform];

  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-5 hover:border-gray-700 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: color }}
          >
            {platformIcon[data.platform]}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{platformLabel[data.platform]}</p>
            <p className="text-gray-500 text-xs">{formatNumber(data.followers)} followers</p>
          </div>
        </div>
        <span
          className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {isPositive ? "+" : ""}{data.followersChange}%
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-800/60 mb-4" />

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Avg. Likes",    value: formatNumber(data.avgLikes),    icon: Heart },
          { label: "Avg. Comments", value: formatNumber(data.avgComments), icon: MessageCircle },
          { label: "Avg. Shares",   value: formatNumber(data.avgShares),   icon: Share2 },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-gray-800/50 rounded-lg p-2.5 text-center">
            <Icon size={13} className="text-gray-400 mx-auto mb-1" />
            <p className="text-white text-sm font-semibold">{value}</p>
            <p className="text-gray-500 text-xs mt-0.5 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      {/* Engagement Rate Bar */}
      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-gray-400 text-xs">Engagement Rate</span>
          <span className="text-white text-xs font-semibold">{data.engagementRate}%</span>
        </div>
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${(data.engagementRate / 12) * 100}%`, backgroundColor: color }}
          />
        </div>
      </div>

      {/* Posts */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800/60">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Users size={12} />
          <span>{data.totalPosts} posts this period</span>
        </div>
      </div>
    </div>
  );
}
