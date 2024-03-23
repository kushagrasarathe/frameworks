import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

export default function StatsCard() {
  return (
    // <Card className="grid grid-cols-12 items-center gap-3 shadow-sm p-10 bg-transparent backdrop-blur-md">
    <Card className="grid grid-cols-12 items-center gap-8 bg-transparent p-6 border-0 shadow-none">
      <div className="col-span-2 flex items-center justify-center">
        <img
          src={
            "https://pbs.twimg.com/profile_images/1732439974497394688/ezW7LwKq_400x400.jpg"
          }
          alt="pfp"
          className="rounded-full shadow-2xl w-40 animate-border bg-white bg-gradient-to-r from-white  to-[#88E0EF] bg-[length:400%_400%] p-1"
        />
      </div>
      <div className=" col-span-9 space-y-3">
        <h1 className=" text-3xl font-semibold">Kushagra Sarathe</h1>
        <Button className=" flex items-center gap-2">
          <span>Visit Farcaster Profile</span>{" "}
          <MoveUpRight className="h-4 w-4" />{" "}
        </Button>
      </div>
    </Card>
  );
}
