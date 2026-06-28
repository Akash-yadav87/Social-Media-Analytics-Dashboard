import BestTimingPanel from "../components/BestTimingPanel";
import HeatmapGrid from "../components/HeatmapGrid";

export default function TimingView() {
  return (
    <div className="space-y-6">
      <HeatmapGrid />
      <BestTimingPanel />
    </div>
  );
}
