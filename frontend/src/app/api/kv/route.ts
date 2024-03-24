import { NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(
  request: NextRequest,
  { params }: { params: { handle: string } }
) {
  try {
    const userReputationScore = await kv.get(params.handle);
    console.log(userReputationScore);

    return new Response(JSON.stringify(userReputationScore), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { handle: string } }
) {
  try {
    const userNewScore = await request.json();
    await kv.set(params.handle, userNewScore);

    return new Response("User Reputation Score stored", {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
