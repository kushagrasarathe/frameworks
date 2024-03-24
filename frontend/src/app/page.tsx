// "use client";

import Heatmap from "@/components/heat-map";
import StatsCard from "@/components/stats-card";
import Image from "next/image";
import { Frame, getFrame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
// import { getUserEngagmentData } from "@/utils/getOpenRankData";
import { getUserAllData } from "@/utils/airstack";

// Declare the frame
const initialFrame: Frame = {
  image: `${process.env.NEXT_PUBLIC_HOST}/`,
  version: "vNext",
  buttons: [
    {
      label: "Generate your Score now → ",
      action: "post",
    },
  ],
  inputText: "Farcaster handle ... ( E.g. dwr.eth )",
  postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/frames/generateScore`,
};

// Export Next.js metadata
// export const metadata: Metadata = {
//   title: "Frames-64 Game",
//   description: "This is a Tournament & Prediction Game on Farcaster Frames.",
//   openGraph: {
//     images: [
//       {
//         url: `${process.env.NEXT_PUBLIC_HOST}/frame1.png`,
//       },
//     ],
//   },
//   other: ,
// };

export async function generateMetadata() {
  return {
    title: "Farcaster Reputation Enginne",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/api/frames",
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}

export default function Home() {
  const callapiHandle = async () => {
    try {
      await fetch("/api/calculateScore", {
        method: "POST",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-normal mt-16 min-h-screen gap-10 max-w-6xl mx-auto">
      {/* <div className="  mt-20 max-w-6xl mx-auto "> */}
      {/* <button onClick={() => callapiHandle()}> Call </button> */}
      <StatsCard />
      <Heatmap />
    </div>
  );
}
