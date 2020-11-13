import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Room } from "./SVG/Room/Room";
import { SvgOverdiv } from "./SVG/SvgOverdiv";
import { useQuery, gql } from "@apollo/client";
import { PannelLeft } from "./Pannels/LeftPannel/PannelLeft";
import { Loader } from "./Loader/Loader";
import { Detector } from "./SVG/Detector/Detector";
import { Beacon } from "./SVG/Beacon/Beacon";
import { BeaconeContext } from "./context/BeaconeContext";
import { Selected } from "./Selected";
import { RightPannel } from "./Pannels/RightPannel/RightPannel";
import { Alarms } from "./Pannels/RightPannel/Alarms";
import { TrackingPannel } from "./Pannels/RightPannel/TrackingPannel";
import { Track } from "./Track";

type ID = string | number;

const previousAnalize = 3;

export const getColor = (device: string) => {
  if (device === "465") return "#33cc33";
  if (device === "463") return "#c985e0";
  return "#cc6600";
};

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

const GET_MY_TODOS = gql`
  query {
    beacons {
      id
      name
      positions {
        id
        device
        rssi
        date
        alarmcode
        txpower
        x
        y
      }
    }
    positions {
      id
      device
      x
      y
    }
    errors {
      id
      code
      message
    }
  }
`;

const App: React.FC = () => {
  const {
    loading,
    error,
    data: { positions: _positions, beacons: _beacons, errors: _errors } = {
      positions: [],
      beacons: [],
      errors: [],
    },
  } = useQuery(GET_MY_TODOS, {
    pollInterval: 1000,
  });

  const { selectedPosition, displayedBeacons } = useContext(BeaconeContext)!;
  const [beacons, setBeacons] = useState<Beacon[]>(_beacons);
  const [positions, setPositions] = useState<Position[]>(_positions);
  const [errors, setErrors] = useState<Error[]>(_positions);

  useEffect(() => {
    setBeacons(_beacons);
    setPositions(_positions);
    setErrors(_errors);
  }, [_positions, _beacons, _errors]);

  if (loading || beacons[0] === undefined) {
    return <Loader />;
  }

  return (
    <>
      <PannelLeft beacons={beacons} />
      <div style={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}>
        <RightPannel beacons={beacons} />
        <Alarms beacons={beacons} alarms={errors} />
        <TrackingPannel beacons={beacons} />
      </div>
      <SvgOverdiv>
        <Room />
        {selectedPosition && <Selected beacons={beacons} />}
        {!selectedPosition &&
          beacons
            .filter((b) =>
              displayedBeacons.find((beacon) => b.name === beacon.name)
            )
            .map((beacon: Beacon) => {
              const array = beacon.positions
                .filter((p) => checkDate(Number(p.date)))
                .map(
                  (p) =>
                    p.rssi.slice(-previousAnalize).reduce((p, c) => p + c) /
                    previousAnalize
                );
              const index = array.indexOf(Math.max(...array));
              const position = beacon.positions[index];

              return (
                <>
                  {beacon.positions
                    .filter((p) => checkDate(Number(p.date)))
                    .map((p) => {
                      const size = calculateDistance(p.rssi, p.txpower);
                      return (
                        <Beacon
                          color={getColor(beacon.name)}
                          name={beacon.name}
                          size={size}
                          x={p.x}
                          y={p.y}
                        />
                      );
                    })}
                </>
              );
            })}
        <Track beacons={beacons}  />
        {positions.map((device: Position) => (
          <Detector x={device.x} y={device.y} name={device.device} />
        ))}
      </SvgOverdiv>
    </>
  );
};

export default App;
