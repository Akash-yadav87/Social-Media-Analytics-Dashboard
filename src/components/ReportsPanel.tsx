import { FileText, Download, Calendar, TrendingUp, BarChart2, Clock } from "lucide-react";

const reports = [
  {
    title: "Monthly Performance Report",
    desc: "Complete engagement analysis for June 2024 across all platforms.",
    date: "Jul 1, 2024",
    icon: BarChart2,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    size: "2.4 MB",
  },
  {
    title: "Content Strategy Report",
    desc: "Top-performing content formats, posting frequency, and A/B test results.",
    date: "Jun 25, 2024",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    size: "1.8 MB",
  },
  {
    title: "Audience Timing Report",
    desc: "Optimal posting windows and audience timezone analysis.",
    date: "Jun 20, 2024",
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    size: "1.1 MB",
  },
  {
    title: "Q2 2024 Summary Report",
    desc: "Quarter-over-quarter growth, platform benchmarks, and strategic insights.",
    date: "Jun 30, 2024",
    icon: Calendar,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    size: "4.2 MB",
  },
];

const metrics = [
  { label: "Total Reports Generated",  value: "48",   sub: "Since Jan 2024"  },
  { label: "Data Points Analyzed",     value: "1.2M", sub: "This quarter"    },
  { label: "Platforms Tracked",        value: "4",    sub: "IG, YT, TW, LI" },
  { label: "Insights Generated",       value: "312",  sub: "AI-powered"      },
];

export default function ReportsPanel() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ label, value, sub }) => (
          <div
            key={label}
            className="bg-gray-900 border border-gray-800/60 rounded-xl p-4"
          >
            <p className="text-2xl font-bold text-white">{value}</p>
            <p className="text-gray-300 text-sm font-medium mt-1">{label}</p>
            <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      {/* Report List */}
      <div className="bg-gray-900 border border-gray-800/60 rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-800/60 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-base">Available Reports</h3>
            <p className="text-gray-400 text-sm mt-0.5">Download or preview generated analytics reports</p>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
            <FileText size={14} />
            Generate New
          </button>
        </div>

        <div className="divide-y divide-gray-800/40">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <div
                key={report.title}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800/20 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-lg ${report.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={report.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-100 text-sm font-medium">{report.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5 truncate">{report.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-400 text-xs">{report.date}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{report.size}</p>
                </div>
                <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-lg transition-all flex-shrink-0 opacity-0 group-hover:opacity-100">
                  <Download size={12} />
                  Download
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note */}
      <div className="bg-gray-900 border border-gray-800/60 rounded-xl p-5">
        <h4 className="text-white text-sm font-semibold mb-2">About This Dashboard</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          This dashboard uses simulated data to demonstrate the Social Media Engagement Analytics platform. In production, it connects to the Instagram Graph API, YouTube Data API v3, Twitter/X API v2, and LinkedIn Marketing API to pull real engagement metrics, impressions, and audience insights in real time.
        </p>
      </div>
    </div>
  );
}
