// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
        {/* {ctx.message?.state?.count ?? 0} */}
      </div>
    ),
    buttons: [<Button action="post">Increment counter</Button>],
    // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
