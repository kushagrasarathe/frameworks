// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  const url = ctx.url;
  const path = url.pathname.split("/");
  const userHandle = path[path.length - 1];
  console.log(userHandle);

  // get the data for that user from kv
  const response = await fetch(
    `${process.env.HOST}/api/calculateScore/${userHandle}`
  );

  const userData = await response.json();
  console.log(userData);
  // render it
  // Might want to check the data and revert saying refresh Again
  if (userData) {
    return {
      image: (
        <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
          {/* {ctx.message?.state?.count ?? 0} */}
          <a>{userHandle}</a>
        </div>
      ),
      buttons: [
        <Button
          action="link"
          target={`${process.env.HOST}/frames/${userHandle}`}
        >
          Profile
        </Button>,
      ],
      // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
    };
  } else {
    return {
      image: (
        <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
          {/* {ctx.message?.state?.count ?? 0} */}
          <a>Cooking up your Score ..</a>
          <a>Hit refresh now</a>
        </div>
      ),
      buttons: [<Button action="post">Refresh</Button>],
      // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
    };
  }
});

export const GET = handleRequest; // Direct Frame Link
export const POST = handleRequest; // For Last frame after fetching it
