// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw=" flex items-stretch  justify-between w-full h-full bg-[#ecf2ff]">
        <div tw="flex flex-col card-score items-center justify-center w-full">
          <h4 tw=" text-3xl font-semibold text-black mb-6">
            Welcome to Vericast
          </h4>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, #4d21c9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)",
              border: "2px",
            }}
            tw=" flex items-center flex-col justify-center h-40 w-40 rounded-full text-black shadow-2xl	"
          >
            <img
              src="https://th.bing.com/th/id/OIG2.Is.h72tGUlpfskKIrRAj?pid=ImgGn"
              tw="rounded-full"
            />
          </div>
          <p tw=" text-xl font-medium text-black mt-6">
            Calculate your reputation score on Farcaster
          </p>
        </div>
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
    textInput: "Farcaster Handle...",
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
