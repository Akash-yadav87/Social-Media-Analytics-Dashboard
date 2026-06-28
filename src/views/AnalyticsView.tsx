import EngagementChart from "../components/EngagementChart";
import ImpressionsChart from "../components/ImpressionsChart";
import ContentPieChart from "../components/ContentPieChart";
import PlatformCard from "../components/PlatformCard";
import { platformOverviews } from "../data/mockData";

export default function AnalyticsView() {
  return (
    <div className="space-y-6">
      <EngagementChart />

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <div className="xl:col-span-3">
          <ImpressionsChart />
        </div>
        <div className="xl:col-span-2">
          <ContentPieChart />
        </div>
      </div>

      <div>
        <h2 className="text-white font-semibold text-base mb-4">Platform Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {platformOverviews.map((p) => (
            <PlatformCard key={p.platform} data={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
