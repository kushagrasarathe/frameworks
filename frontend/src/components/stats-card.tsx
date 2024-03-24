import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveUpRight, Share } from "lucide-react";
import { Separator } from "./ui/separator";

export default function StatsCard() {
  return (
    // <Card className="grid grid-cols-12 items-center gap-3 shadow-sm p-10 bg-transparent backdrop-blur-md">
    <>
      <Card className=" flex items-stretch justify-between w-full bg-white rounded-md shadow-xl">
        <div className="flex flex-col card-score items-center justify-center w-full rounded-l-md">
          <h4 className="card-score__title text-2xl font-semibold text-light-blue">
            Your Reputation Score
          </h4>
          <div className="card-score__result flex items-center justify-center border shadow-2xl">
            <span className="text-6xl font-bold">76</span>
            <span className=" text-xl font-semibold">of 100</span>
          </div>
          <p className=" text-base font-medium text-light-blue">
            Your are among top 70% users on Farcaster
          </p>
        </div>
        <div className="flex flex-col gap-6 card-details w-full px-8 py-6">
          <div className="flex items-center justify-between w-full">
            <h4 className=" text-2xl font-semibold text-indigo-500">
              Kushagra
            </h4>
            <img
              src={
                "https://pbs.twimg.com/profile_images/1732439974497394688/ezW7LwKq_400x400.jpg"
              }
              alt="pfp"
              className="rounded-full h-14 w-14 shadow-2xl broder-2"
            />
          </div>
          <Separator />
          {/* <h3 className="text-2xl font-semibold">Summary</h3> */}
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-one text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-two text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              92<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-three text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score flex justify-between">
            <span className="card-details__category card-details__category-four text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-four text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-four text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <div className="card-details__score  flex justify-between">
            <span className="card-details__category card-details__category-four text-xl font-medium text-dark-navy">
              Metric 1
            </span>
            <span className="card-details__result text-xl font-semibold">
              80<span className="card-details__max">/ 100</span>
            </span>
          </div>
          <Button className=" flex items-center gap-2">
            <span>Share</span> <Share className=" w-5 h-5" />
          </Button>
        </div>
      </Card>
      <div className=" flex items-start justify-between w-full">
        {/* <Card className="flex flex-col items-center gap-4 bg-transparent p-6 border-0 shadow-none">
        <div className="col-span-2 flex items-center justify-center">
          <img
            src={
              "https://pbs.twimg.com/profile_images/1732439974497394688/ezW7LwKq_400x400.jpg"
            }
            alt="pfp"
            className="rounded-full shadow-2xl w-40 animate-border bg-white bg-gradient-to-r from-white  to-[#88E0EF] bg-[length:400%_400%] p-1"
          />
        </div>

        <h1 className=" text-3xl font-semibold">Kushagra Sarathe</h1>
        <Button className=" flex items-center gap-2">
          <span>Visit Farcaster Profile</span>{" "}
          <MoveUpRight className="h-4 w-4" />{" "}
        </Button>
      </Card> */}

        {/* <Card className="flex items-center gap-4 bg-transparent p-6 border-0 shadow-none w-6/12">
          <div className="flex items-center bg-very-light-blue min-h-screen">
            <section className="flex justify-center bg-white cards"></section>
          </div>
        </Card> */}
      </div>
    </>
  );
}
