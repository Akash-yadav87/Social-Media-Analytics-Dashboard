import {
  LayoutDashboard,
  BarChart2,
  TrendingUp,
  Clock,
  FileText,
  Settings,
  ChevronRight,
  Activity,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: "overview",   label: "Overview",         icon: LayoutDashboard },
  { id: "analytics",  label: "Analytics",         icon: BarChart2 },
  { id: "engagement", label: "Engagement",        icon: Activity },
  { id: "timing",     label: "Best Timing",       icon: Clock },
  { id: "strategy",   label: "Content Strategy",  icon: TrendingUp },
  { id: "reports",    label: "Reports",           icon: FileText },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-800/60 flex flex-col z-30">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Activity size={16} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">SocialLens</p>
            <p className="text-gray-500 text-xs">Analytics Platform</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-gray-600 text-xs font-medium uppercase tracking-widest px-3 mb-3">
          Main Menu
        </p>
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400 font-medium"
                  : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={16}
                  className={isActive ? "text-indigo-400" : "text-gray-500 group-hover:text-gray-300"}
                />
                {label}
              </div>
              {isActive && <ChevronRight size={14} className="text-indigo-500" />}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-800/60">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all">
          <Settings size={16} className="text-gray-500" />
          Settings
        </button>
        <div className="mt-3 mx-1 px-3 py-3 bg-gray-900 rounded-lg border border-gray-800/60">
          <p className="text-gray-400 text-xs font-medium">Last synced</p>
          <p className="text-gray-200 text-xs mt-0.5">Today at 10:42 AM</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs">Live data</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
