import { Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import { topPosts, platformBadgeBg, formatNumber } from "../data/mockData";

const platformLabel: Record<string, string> = {
  instagram: "Instagram",
  youtube:   "YouTube",
  twitter:   "Twitter / X",
  linkedin:  "LinkedIn",
};

export default function TopPostsTable() {
  return (
    <div className="bg-gray-900 border border-gray-800/60 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-800/60">
        <h3 className="text-white font-semibold text-base">Top Performing Posts</h3>
        <p className="text-gray-400 text-sm mt-0.5">Ranked by engagement rate</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800/60">
              {["Platform", "Content Preview", "Impressions", "Likes", "Comments", "Shares", "Eng. Rate", "Posted"].map(
                (col) => (
                  <th
                    key={col}
                    className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/40">
            {topPosts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-800/30 transition-colors duration-150"
              >
                {/* Platform */}
                <td className="px-5 py-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${platformBadgeBg[post.platform]}`}
                  >
                    {platformLabel[post.platform]}
                  </span>
                </td>

                {/* Content */}
                <td className="px-5 py-4 max-w-xs">
                  <p className="text-gray-200 text-sm truncate">{post.content}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{post.postedAt}</p>
                </td>

                {/* Impressions */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    <Eye size={13} className="text-gray-500" />
                    {formatNumber(post.impressions)}
                  </div>
                </td>

                {/* Likes */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    <Heart size={13} className="text-gray-500" />
                    {formatNumber(post.likes)}
                  </div>
                </td>

                {/* Comments */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    <MessageCircle size={13} className="text-gray-500" />
                    {formatNumber(post.comments)}
                  </div>
                </td>

                {/* Shares */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    <Share2 size={13} className="text-gray-500" />
                    {formatNumber(post.shares)}
                  </div>
                </td>

                {/* Engagement Rate */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${(post.engagementRate / 12) * 100}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{post.engagementRate}%</span>
                  </div>
                </td>

                {/* Posted */}
                <td className="px-5 py-4 text-gray-400 text-sm whitespace-nowrap">
                  {post.postedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
