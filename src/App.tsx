import React, { useEffect } from "react";
import "./App.css";
import { Room } from "./SVG/Room/Room";
import { SvgOverdiv } from "./SVG/SvgOverdiv";
import { useQuery, gql } from "@apollo/client";
import { PannelLeft } from "./Pannels/PannelLeft";

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
    error,
    data: { positions, beacons } = { positions: [], beacons: [] },
  } = useQuery(GET_MY_TODOS, {
    pollInterval: 1000,
  });

  useEffect(() => {
    console.log(positions, beacons);
  }, [positions, beacons]);

  return (
    <>
      <PannelLeft />
      <SvgOverdiv>
        <Room />
      </SvgOverdiv>
    </>
  );
};

export default App;
