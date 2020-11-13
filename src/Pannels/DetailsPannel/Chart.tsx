import React, { useEffect, useState } from "react";
import { Device } from "../../App";
import {
  Chart as DrawChart,
  Interval,
  Tooltip,
  Line,
  Axis,
  Point,
} from "bizcharts";

export const Chart: React.FC<{ rssi: number[] }> = ({ rssi }) => {
  const length = rssi.length - 1;
  const data = rssi.map((p, id) => ({
    time: length === id ? `t` : `t-${length - id}`,
    RSSI: p,
  }));
  const padding = [10, 5, 40, 35];

  return (
    <>
      <DrawChart
        height={200}
        width={300}
        autoFit
        data={data}
        interactions={["active-region"]}
        padding={padding}
      >
        <Axis name="RSSI" label={{ formatter: (val) => `${val}` }} />
        <Line position="time*RSSI" size={2} color={"city"} />
        <Point position="time*RSSI" size={4} color={"city"} />
      </DrawChart>
    </>
  );
};
