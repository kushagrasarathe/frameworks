// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { getUserDataForFid } from "frames.js";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  // Get the users fid
  // try to fetch the data for the user
  // if it goes above 5 sec , send a refresh Frame back
  // Otherwise return the frame with user's profile

  console.log(ctx.message);
  const userFid: number = ctx?.message.requesterFid;

  // get Data if present from KV

  // Otherwise
  // request the User data for score calculate
  // don't wait for that

  // Send a refresh Frame first

  const isRefreshing = true;

  // const userHandle = "0xdhruv.eth";
  if (isRefreshing) {
    return {
      image: (
        <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
          {/* {ctx.message?.state?.count ?? 0} */}
          <a>Cooking up your Score</a>
          <a>Hit refresh now</a>
        </div>
      ),
      buttons: [<Button action="post">Refresh</Button>],
      // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
    };
  } else {
    return {
      image: (
        <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
          {/* {ctx.message?.state?.count ?? 0} */}
          <a>Trust Score : 785</a>
        </div>
      ),
      buttons: [
        <Button action="link" target={`${process.env.HOST}/frames/${userFid}`}>
          Profile
        </Button>,
        <Button action="post">Mint</Button>,
      ],
    };
  }
});

export const POST = handleRequest;
