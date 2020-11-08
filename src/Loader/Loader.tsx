import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

export const Loader: React.FC = () => {
  return (
    <div
      style={{
        transform: "translate(0px,-70%)",
        position: "relative",
        top: "50vh",
        textAlign: "center",
      }}
    >
      <BeatLoader size={100} color={"#b5adac"} margin={10} />
      {/* <div
        style={{
          textAlign: "center",
          padding: 10,
          fontSize: 30,
          fontWeight: 600,
          color: "#6c6160",
        }}
      >
        Loading ...
      </div> */}
    </div>
  );
};
