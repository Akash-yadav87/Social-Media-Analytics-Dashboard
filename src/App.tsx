import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewView from "./views/OverviewView";
import AnalyticsView from "./views/AnalyticsView";
import EngagementView from "./views/EngagementView";
import TimingView from "./views/TimingView";
import StrategyView from "./views/StrategyView";
import ReportsView from "./views/ReportsView";

const views: Record<string, React.ReactNode> = {
  overview:   <OverviewView />,
  analytics:  <AnalyticsView />,
  engagement: <EngagementView />,
  timing:     <TimingView />,
  strategy:   <StrategyView />,
  reports:    <ReportsView />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-950 font-[Inter,sans-serif]">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <Header activeTab={activeTab} />

        {/* Page Content */}
        <main className="flex-1 p-8">
          {views[activeTab] ?? views.overview}
        </main>

        {/* Footer */}
        <footer className="px-8 py-4 border-t border-gray-800/60 flex items-center justify-between">
          <p className="text-gray-600 text-xs">
            SocialLens Analytics Platform &copy; 2024 — Data refreshed every 15 minutes
          </p>
          <p className="text-gray-600 text-xs">
            Powered by Instagram Graph API &bull; YouTube Data API &bull; Twitter API v2 &bull; LinkedIn Marketing API
          </p>
        </footer>
      </div>
    </div>
  );
}
