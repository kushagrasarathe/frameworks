// import { getUserEngagmentData } from "@/utils/getOpenRankData";
import { calculateScore } from "@/utils/calculateScore";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // await getUserEngagmentData();
    const userHandle = "dwr.eth";
    const userFid = 3;

    await calculateScore(userHandle, userFid);

    return new Response("ReuestCall Successful", {
      headers: {
        "Content-Type": "text/html",
      },
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}
