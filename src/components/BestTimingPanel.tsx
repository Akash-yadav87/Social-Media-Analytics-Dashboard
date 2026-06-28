import { Clock, CalendarDays } from "lucide-react";
import { bestPostingTimes, platformColors, platformBadgeBg } from "../data/mockData";

const platformLabel: Record<string, string> = {
  instagram: "Instagram",
  youtube:   "YouTube",
  twitter:   "Twitter / X",
  linkedin:  "LinkedIn",
};

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-white text-xs font-semibold w-6 text-right">{score}</span>
    </div>
  );
}

export default function BestTimingPanel() {
  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center">
          <Clock size={17} className="text-indigo-400" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-base">Best Posting Times</h3>
          <p className="text-gray-400 text-sm">Optimal slots ranked by predicted engagement</p>
        </div>
      </div>

      <div className="space-y-3">
        {bestPostingTimes.map((item) => (
          <div
            key={item.day}
            className="flex items-center gap-4 bg-gray-800/40 border border-gray-800/60 rounded-lg px-4 py-3"
          >
            {/* Day + Time */}
            <div className="flex items-center gap-2 w-36 flex-shrink-0">
              <CalendarDays size={14} className="text-gray-500" />
              <div>
                <p className="text-gray-200 text-sm font-medium">{item.day}</p>
                <p className="text-gray-500 text-xs">{item.hour}</p>
              </div>
            </div>

            {/* Platform Badge */}
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${platformBadgeBg[item.platform]}`}
            >
              {platformLabel[item.platform]}
            </span>

            {/* Score Bar */}
            <div className="flex-1">
              <ScoreBar score={item.score} />
            </div>

            {/* Color dot */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: platformColors[item.platform] }}
            />
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-4 p-3 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
        <p className="text-indigo-300 text-xs leading-relaxed">
          Scores are calculated based on historical engagement patterns, audience timezone distribution, and platform algorithm behavior. Higher scores indicate greater expected reach.
        </p>
      </div>
    </div>
  );
}
