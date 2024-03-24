// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  console.log(ctx.url);
  return {
    image: (
      <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
        {/* {ctx.message?.state?.count ?? 0} */}
        <a>Introductory Frame</a>
        <br />
        <a>Get Your Reputation Score on farcaster</a>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={`${process.env.HOST}/api/frames/generateScore`}
      >
        Generate your Score now →
      </Button>,
    ],
    accepts: [
      {
        id: "farcaster",
        version: "vNext",
      },
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
