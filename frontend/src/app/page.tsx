<<<<<<< HEAD
import Heatmap from "@/components/heat-map";
import StatsCard from "@/components/stats-card";
=======
"use client";
>>>>>>> 2c458d9658475207795b621000291fa0be20d6ff
import Image from "next/image";
import { Frame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { getUserEngagmentData } from "@/utils/getOpenRankData";

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
      await getUserEngagmentData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
<<<<<<< HEAD
    <div className="flex items-center flex-col justify-normal mt-16 min-h-screen gap-10 max-w-6xl mx-auto">
      {/* <div className="  mt-20 max-w-6xl mx-auto "> */}
      <StatsCard />
      <Heatmap />
    </div>
=======
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <button onClick={() => callapiHandle()}>Call</button>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
>>>>>>> 2c458d9658475207795b621000291fa0be20d6ff
  );
}
