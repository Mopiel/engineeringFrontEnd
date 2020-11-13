import * as React from "react";
import { useState } from "react";
import { Beacon } from "../App";

type SelectedPosition = {
  device: string;
  name: string;
};

interface BeaconeContextType {
  selectedPosition?: SelectedPosition;
  setSelectedPosition: (state?: SelectedPosition) => void;
  displayedBeacons: Beacon[];
  setDisplayedBeacons: (state: Beacon[]) => void;
}

export const BeaconeContext = React.createContext<
  BeaconeContextType | undefined
>(undefined);

export const BeaconeContextProvider: React.FC = ({ children }) => {
  const [selectedPosition, setSelectedPosition] = useState<SelectedPosition>();
  const [displayedBeacons, setDisplayedBeacons] = useState<Beacon[]>([]);

  return (
    <BeaconeContext.Provider
      value={{
        setSelectedPosition,
        selectedPosition,
        displayedBeacons,
        setDisplayedBeacons,
      }}
    >
      {children}
    </BeaconeContext.Provider>
  );
};
