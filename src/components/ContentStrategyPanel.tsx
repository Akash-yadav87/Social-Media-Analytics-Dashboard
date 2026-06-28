import { TrendingUp, TrendingDown, Minus, Lightbulb } from "lucide-react";
import { contentStrategies } from "../data/mockData";

const trendIcon = {
  up:     <TrendingUp size={13} className="text-emerald-400" />,
  down:   <TrendingDown size={13} className="text-red-400" />,
  stable: <Minus size={13} className="text-yellow-400" />,
};

const trendBg = {
  up:     "bg-emerald-500/10 text-emerald-400",
  down:   "bg-red-500/10 text-red-400",
  stable: "bg-yellow-500/10 text-yellow-400",
};

const trendLabel = {
  up:     "Growing",
  down:   "Declining",
  stable: "Stable",
};

const recommendations = [
  "Prioritize short-form video content — Reels and Shorts deliver 2.1x higher reach vs static posts.",
  "Post carousel slideshows on Wednesday evenings for maximum LinkedIn B2B engagement.",
  "Infographics perform best when shared on Twitter between 9–11 AM on weekdays.",
  "Repurpose long-form YouTube content into bite-sized clips for Instagram and TikTok.",
  "Use data-driven thumbnails — A/B test titles with numbers and action words to boost CTR.",
  "Engage with comments within the first 60 minutes after posting to signal activity to algorithms.",
];

export default function ContentStrategyPanel() {
  return (
    <div className="space-y-6">
      {/* Content Type Performance Table */}
      <div className="bg-gray-900 border border-gray-800/60 rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-800/60">
          <h3 className="text-white font-semibold text-base">Content Type Performance</h3>
          <p className="text-gray-400 text-sm mt-0.5">Average engagement rate by format</p>
        </div>
        <div className="divide-y divide-gray-800/40">
          {contentStrategies.map((item) => (
            <div
              key={item.type}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800/20 transition-colors"
            >
              {/* Type */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-200 text-sm font-medium truncate">{item.type}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.postsCount} posts analyzed</p>
              </div>

              {/* Bar */}
              <div className="w-36 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-indigo-500"
                    style={{ width: `${(item.avgEngagement / 12) * 100}%` }}
                  />
                </div>
                <span className="text-white text-sm font-semibold w-10 text-right">
                  {item.avgEngagement}%
                </span>
              </div>

              {/* Trend */}
              <div
                className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full w-24 justify-center ${trendBg[item.trend]}`}
              >
                {trendIcon[item.trend]}
                {trendLabel[item.trend]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Lightbulb size={17} className="text-amber-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base">AI-Powered Recommendations</h3>
            <p className="text-gray-400 text-sm">Based on your performance data and industry benchmarks</p>
          </div>
        </div>
        <div className="space-y-3">
          {recommendations.map((rec, i) => (
            <div key={i} className="flex gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-800/60">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
