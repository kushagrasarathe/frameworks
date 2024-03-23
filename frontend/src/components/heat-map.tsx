"use client";

import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { Card } from "./ui/card";

const value = [
  { date: "2024/01/1", count: 0 },
  { date: "2024/01/2", count: 1 },
  { date: "2024/01/3", count: 2 },
  { date: "2024/01/4", count: 3 },
  { date: "2024/01/5", count: 4 },
  { date: "2024/01/6", count: 5 },
  { date: "2024/01/7", count: 6 },
  { date: "2024/01/8", count: 7 },
  { date: "2024/01/9", count: 8 },
  { date: "2024/01/10", count: 9 },
  { date: "2024/01/11", count: 10 },
];

export default function Heatmap() {
  const [selected, setSelected] = useState("");
  return (
    <div className=" p-6 w-full">
      <Card className=" bg-white p-4 pt-5 w-full">
        <HeatMap
          width={"full"}
          mode={"dark"}
          panelColors={{
            1: "#88E0EF",
            2: "#77d6e4",
            3: "#66cbd9",
            4: "#55c0ce",
            5: "#44b5c3",
            6: "#33abb8",
            7: "#22a0ad",
            8: "#1195a2",
            9: "#008b97",
            10: "#007e8b",
          }}
          value={value}
          monthLabels={false}
          weekLabels={false}
          rectSize={16}
          space={4}
          legendCellSize={0}
          startDate={new Date("2024/01/01")}
          rectRender={(props, data) => {
            if (selected !== "") {
              props.opacity = data.date === selected ? 1 : 0.45;
            }
            return (
              <rect
                {...props}
                onClick={() => {
                  setSelected(data.date === selected ? "" : data.date);
                }}
              />
            );
          }}
        />
      </Card>
    </div>
  );
}
