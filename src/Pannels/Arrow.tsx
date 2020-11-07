import classes from "*.module.css";
import React from "react";
import { useStyles } from "./Style";
interface Props {
  collapsed: boolean;
}

export const Arrow: React.FC<Props> = ({ collapsed }) => {
  const classes = useStyles();
  return (
    <svg
      height={20}
      width={20}
      style={{
        transform: `rotate(${collapsed ? 0 : 180}deg)`,
        transition: "0.2s",
      }}
    >
      <g>
        <line
          stroke={"black"}
          strokeLinecap="round"
          strokeWidth={2.5}
          x1={6.5}
          x2={13.5}
          y1={3}
          y2={10}
        />
        <line
          stroke={"black"}
          strokeLinecap="round"
          strokeWidth={2.5}
          x1={6.5}
          x2={13.5}
          y1={17}
          y2={10}
        />
      </g>
    </svg>
  );
};
