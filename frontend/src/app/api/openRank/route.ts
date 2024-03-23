import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
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
