import KPICard from "../components/KPICard";
import EngagementChart from "../components/EngagementChart";
import PlatformCard from "../components/PlatformCard";
import ImpressionsChart from "../components/ImpressionsChart";
import ContentPieChart from "../components/ContentPieChart";
import { kpiCards, platformOverviews } from "../data/mockData";

export default function OverviewView() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiCards.map((card, i) => (
          <KPICard key={card.label} card={card} index={i} />
        ))}
      </div>

      {/* Engagement Trend — full width */}
      <EngagementChart />

      {/* Impressions + Pie */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <div className="xl:col-span-3">
          <ImpressionsChart />
        </div>
        <div className="xl:col-span-2">
          <ContentPieChart />
        </div>
      </div>

      {/* Platform Cards */}
      <div>
        <h2 className="text-white font-semibold text-base mb-4">Platform Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {platformOverviews.map((p) => (
            <PlatformCard key={p.platform} data={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
