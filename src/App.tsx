import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Room } from "./SVG/Room/Room";
import { SvgOverdiv } from "./SVG/SvgOverdiv";
import { Detector } from "./SVG/Detector/Detector";
import { Beacon } from "./SVG/Beacon/Beacon";

type ID = string | number;

const previousAnalize = 3;

export const getColor = (device: string) => {
  if (device === "465") return "#33cc33";
  if (device === "463") return "#c985e0";
  return "#cc6600";
};

const mapValues = ((value: number[]) => [850 - value[0] * 100, value[1] * 100])

const PREDICTED = [
  [6.7299733, 4.0320034],
  [6.5177207, 4.5209284],
  [6.6850085, 4.354196],
  [6.3240952, 4.2109866],
  [6.4669795, 2.6960826],
  [5.092784, 4.7253714],
  [2.0174108, 4.179389],
  [4.4990883, 6.2895],
  [2.9614732, 4.930053],
  [1.4669795, 2.2895]
].map(mapValues)

const MESURED = [
  [7.0, 6.0],
  [6.0, 5.5],
  [6.5, 4.0],
  [7.0, 3.0],
  [6.0, 2.5],
  [4.5, 4.5],
  [4.0, 5.5],
  [3.0, 6.0],
  [2.5, 4.5],
  [1.5, 1.5]
].map(mapValues)

const PREDICT_WIFI = [
  [6.5666847, 4.2955937],
  [6.730729, 4.6750293],
  [6.9138794, 4.266975],
  [6.6572185, 4.4457655],
  [6.3788357, 2.6709325],
  [4.8156414, 5.004413],
  [2.9992158, 5.7474427],
  [3.3928318, 6.2645054],
  [2.8465064, 4.6240106],
  [1.4669795, 2.2895]
].map(mapValues)

const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
]

const DETECTORS = [
  [1.25, 0],
  [5, 4],
  [2.5, 6],
  [7, 1],
  [7, 6.5],
  [8.5, 4],
  [5, 6.5],
].map(mapValues)

export interface Position {
  id: ID;
  device: string;
  x: number;
  y: number;
}
export interface Beacon {
  id: ID;
  name: string;
  positions: Device[];
}
export interface Device {
  id: ID;
  x: number;
  y: number;
  device: string;
  rssi: number[];
  date: string;
  txpower: number;
  alarmcode: number;
}

export interface Error {
  id: ID;
  code: number;
  message: string;
}

export const checkDate = (date: number) => {
  if ((Date.now() - date) / 1000 < 4) return true;
  else return false;
};

export const calculateDistance = (rssi: number[], txpower: number) => {
  const newRssi =
    rssi.slice(-previousAnalize).reduce((p, c) => p + c) / previousAnalize;
  return Math.pow(10, (newRssi - txpower) / (-10 * 2.5));
};


const App: React.FC = () => {

  return (
    <>
      <SvgOverdiv>
        <Room />
        <>
          {MESURED
            .map((measured, index) => {
              const predicted = PREDICT_WIFI[index]
              return (
                <>
                  <Beacon
                    color={"green"}
                    name={"from"}
                    size={0.1}
                    x={measured[0]}
                    y={measured[1]}
                  />

                  {predicted && <>
                    <Beacon
                      color={"red"}
                      name={"to"}
                      size={0.1}
                      x={predicted[0]}
                      y={predicted[1]}
                    />
                    <line
                      x1={measured[0]}
                      y1={measured[1]}
                      x2={predicted[0]}
                      y2={predicted[1]}
                      style={{
                        strokeWidth: 3,
                        fill: "transparent",
                        stroke: COLORS[index % COLORS.length],
                      }}
                    />
                  </>}
                </>
              );
            })}
        </>
        {DETECTORS.map((detector, index) => {
          return (
            <Detector
              x={detector[0]}
              y={detector[1]}
              name={(index < 6 ? ("BLE " + (index + 1).toString()) : "WIFI")}
            />
          )
        })}
      </SvgOverdiv>
    </>
  );
};

export default App;
