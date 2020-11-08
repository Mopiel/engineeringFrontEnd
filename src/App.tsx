import React, { useEffect } from "react";
import "./App.css";
import { Room } from "./SVG/Room/Room";
import { SvgOverdiv } from "./SVG/SvgOverdiv";
import { useQuery, gql } from "@apollo/client";
import { PannelLeft } from "./Pannels/LeftPannel/PannelLeft";
import { Loader } from "./Loader/Loader";
type ID = string | number;

export interface Position {
  id: ID;
  device: string;
  x: number;
  y: number;
}
export interface Beacon {
  id: ID;
  name: String;
  positions: Devices[];
}
export interface Devices {
  id: ID;
  x: number;
  y: number;
  device: string;
  rssi: number[];
  date: string;
  txpower: number;
  alarmcode: number;
}

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
  }
`;

const App: React.FC = () => {
  const {
    loading,
    error,
    data: { positions, beacons } = { positions: [], beacons: [] },
  } = useQuery(GET_MY_TODOS, {
    pollInterval: 1000,
  });

  useEffect(() => {
    console.log(positions, beacons);
  }, [positions, beacons]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PannelLeft beacons={beacons} />
      <SvgOverdiv>
        <Room />
      </SvgOverdiv>
    </>
  );
};

export default App;
