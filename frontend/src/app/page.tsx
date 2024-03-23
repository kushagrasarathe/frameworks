"use client";

import Heatmap from "@/components/heat-map";
import StatsCard from "@/components/stats-card";
import Image from "next/image";
import { Frame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
// import { getUserEngagmentData } from "@/utils/getOpenRankData";
import { getUserAllData } from "@/utils/airstack";

// Declare the frame
// const initialFrame: Frame = {
//   image: `${process.env.NEXT_PUBLIC_HOST}/Welcome.png`,
//   version: "vNext",
//   buttons: [
//     {
//       label: "Submit Entry",
//       action: "post",
//     },
//   ],
//   inputText: "Enter your dad joke here",
//   postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/entries`,
// };

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
//   other: getFrameFlattened(initialFrame),
// };

// export async function generateMetadata() {
//   return {
//     title: "My page",
//     ...(await fetchMetadata(
//       new URL("/frames", process.env.VERCEL_PUBLIC || "http://localhost:3000")
//     )),
//   };
// }

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
      <StatsCard />
      <Heatmap />
    </div>
  );
}
