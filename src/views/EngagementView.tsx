import TopPostsTable from "../components/TopPostsTable";
import EngagementChart from "../components/EngagementChart";
import { kpiCards } from "../data/mockData";
import KPICard from "../components/KPICard";

export default function EngagementView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiCards.map((card, i) => (
          <KPICard key={card.label} card={card} index={i} />
        ))}
      </div>
      <EngagementChart />
      <TopPostsTable />
    </div>
  );
}
