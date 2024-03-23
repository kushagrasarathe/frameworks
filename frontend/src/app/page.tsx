import Heatmap from "@/components/heat-map";
import StatsCard from "@/components/stats-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-normal mt-16 min-h-screen gap-10 max-w-6xl mx-auto">
      {/* <div className="  mt-20 max-w-6xl mx-auto "> */}
      <StatsCard />
      <Heatmap />
    </div>
  );
}
