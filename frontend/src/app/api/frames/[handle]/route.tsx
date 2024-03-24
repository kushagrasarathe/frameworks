// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  // Get the users fid
  // try to fetch the data for the user
  // if it goes above 5 sec , send a refresh Frame back
  // Otherwise return the frame with user's profile

  const url = ctx.url;
  const userHandle = url.pathname;
  console.log(userHandle);

  // get the data for that user from kv

  // const userHandle = "0xdhruv.eth";
  return {
    image: (
      <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
        {/* {ctx.message?.state?.count ?? 0} */}
        <a>{userHandle}</a>
      </div>
    ),
    buttons: [
      <Button action="link" target={`${process.env.HOST}/frames/${userHandle}`}>
        Profile
      </Button>,
    ],
    // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
  };
});

export const POST = handleRequest;
