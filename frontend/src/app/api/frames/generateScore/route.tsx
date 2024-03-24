// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { getUserDataForFid } from "frames.js";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  console.log(ctx.message);
  if (ctx.message) {
    // Get the users fid
    const userFid: number = ctx?.message.requesterFid;

    const userFData = await getUserDataForFid({ fid: userFid });
    const userHandle = userFData?.username;

    // try to fetch the data for the user\
    // get Data if present from KV
    const response = await fetch(
      `${process.env.HOST}/api/calculateScore/${userHandle}`
    );
    const userData = await response.json();
    console.log(userData);

    if (!userData) {
      // Otherwise
      // request the User data for score calculate
      // don't wait for that

      // Send a refresh Frame first
      // send a POST request for generating the Score
      fetch(`${process.env.HOST}/api/calculateScore/${userHandle}`, {
        method: "POST",
      });

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
      // Otherwise return the frame with user's profile

      return {
        image: (
          <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
            {/* {ctx.message?.state?.count ?? 0} */}
            <a>Trust Score : 785</a>
          </div>
        ),
        buttons: [
          <Button
            action="link"
            target={`${process.env.HOST}/frames/${userFid}`}
          >
            Profile
          </Button>,
          <Button action="post">Mint</Button>,
        ],
      };
    }
  } else {
    return {
      image: (
        <div tw="flex w-full h-full bg-slate-700 text-white justify-center items-center">
          {/* {ctx.message?.state?.count ?? 0} */}
          <a>There seems to be an Issue</a>
          {/* <a>Try again</a> */}
        </div>
      ),
      buttons: [<Button action="post">Try again</Button>],
      // state: { count: (ctx.message?.state?.count ?? 0) + 1 },
    };
  }
});

export const POST = handleRequest;
