import React from "react";

import { fetchMetadata } from "frames.js/next";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}) {
  return {
    title: "Farcaster Reputation Enginne",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        `/api/frames/${params.handle}`,
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}

export default function page() {
  return (
    <div className=" flex items-center justify-center gap-5 min-h-[80vh]">
      <div className="flex flex-col items-center justify-center bg-white h-[400px] w-[800px]">
        <div className="bg-[#f7f6fb]">
          <img
            src={
              "https://pbs.twimg.com/profile_images/1732439974497394688/ezW7LwKq_400x400.jpg"
            }
            alt="pfp"
            className="rounded-full shadow-2xl w-40 animate-border bg-white bg-gradient-to-r from-white  to-[#88E0EF] bg-[length:400%_400%] p-1"
          />
        </div>
      </div>
    </div>
  );
}
