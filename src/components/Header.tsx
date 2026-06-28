import { Bell, Search, RefreshCw, Download } from "lucide-react";

interface HeaderProps {
  activeTab: string;
}

const tabTitles: Record<string, { title: string; description: string }> = {
  overview:   { title: "Overview",        description: "All platforms at a glance" },
  analytics:  { title: "Analytics",       description: "Deep-dive into platform metrics" },
  engagement: { title: "Engagement",      description: "Likes, comments, shares & impressions" },
  timing:     { title: "Best Timing",     description: "Optimal posting windows per platform" },
  strategy:   { title: "Content Strategy", description: "Content type performance & recommendations" },
  reports:    { title: "Reports",         description: "Downloadable performance reports" },
};

export default function Header({ activeTab }: HeaderProps) {
  const { title, description } = tabTitles[activeTab] ?? tabTitles.overview;

  return (
    <header className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="text-gray-400 text-sm mt-0.5">{description}</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Date Range */}
          <div className="hidden md:flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300">
            <span className="text-gray-500 text-xs">Period:</span>
            <span className="font-medium">Jun 1 – Jun 30, 2024</span>
          </div>

          {/* Search */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700 transition-all">
            <Search size={15} />
          </button>

          {/* Refresh */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700 transition-all">
            <RefreshCw size={15} />
          </button>

          {/* Export */}
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
            <Download size={14} />
            Export
          </button>

          {/* Bell */}
          <button className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-gray-100 transition-all">
            <Bell size={15} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500" />
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
