import classes from "*.module.css";
import React from "react";
import { useStyles } from "./Style";

export const Room: React.FC = () => {
  const classes = useStyles();
  return (
    <g>
      <rect className={classes.rect} width="850" height="700" />
      <rect
        className={classes.rect}
        width="300" height="100"
        style={{ fill: "red" }}
      />
      <rect
        className={classes.rect}
        transform={"translate(300,0)"}
        width="300"
        height="400"
        style={{ fill: "red" }}
      />
      <rect
        className={classes.rect}
        transform={"translate(600,0)"}
        width="250"
        height="500"
      />
      <rect
        className={classes.rect}
        transform={"translate(600,500)"}
        width="250"
        height="200"
        style={{ fill: "red" }}
      />
      <g transform={"translate(300,500)"}>
        <line className={classes.line} x1="0" y1="0" x2="0" y2="200" />
      </g>
      <g transform={"translate(500,400)"}>
        <line className={classes.line} x1="0" y1="0" x2="-50" y2="-50" />
        <path d="M -73 0 Q -73 -40 -50 -50" className={classes.line} />
      </g>
      <g transform={"translate(600,500)"}>
        <line className={classes.line} x1="0" y1="0" x2="50" y2="-50" />
        <path d="M 0 -73 Q 40 -73 50 -50" className={classes.line} />
      </g>
      <g transform={"translate(500,700)"}>
        <line className={classes.line} x1="0" y1="0" x2="-50" y2="-50" />
        <path d="M -73 0 Q -73 -40 -50 -50" className={classes.line} />
      </g>
    </g>
  );
};
