import classes from "*.module.css";
import React from "react";
import { useStyles } from "./Style";

export const Room: React.FC = () => {
  const classes = useStyles();
  return (
    <g style={{ transform: "translate(-450px,-250px)" }}>
      <rect className={classes.rect} width="900" height="500" />
      <rect className={classes.rect} width="300" height="300" />
      <rect
        className={classes.rect}
        transform={"translate(300,0)"}
        width="300"
        height="200"
      />
      <rect
        className={classes.rect}
        transform={"translate(600,0)"}
        width="300"
        height="300"
      />
      <rect
        className={classes.rect}
        transform={"translate(600,300)"}
        width="300"
        height="200"
      />
      <g transform={"translate(400,300)"}>
        <line className={classes.line} x1="0" y1="0" x2="0" y2="200" />
      </g>
      <g transform={"translate(300,280)"}>
        <line className={classes.line} x1="0" y1="0" x2="-50" y2="-50" />
        <path d="M 0 -73 Q -40 -73 -50 -50" className={classes.line} />
      </g>
      <g transform={"translate(450,200)"}>
        <line className={classes.line} x1="0" y1="0" x2="-50" y2="-50" />
        <path d="M -73 0 Q -73 -40 -50 -50" className={classes.line} />
      </g>
      <g transform={"translate(600,280)"}>
        <line className={classes.line} x1="0" y1="0" x2="50" y2="-50" />
        <path d="M 0 -73 Q 40 -73 50 -50" className={classes.line} />
      </g>
      <g transform={"translate(600,430)"}>
        <line className={classes.line} x1="0" y1="0" x2="50" y2="-50" />
        <path d="M 0 -73 Q 40 -73 50 -50" className={classes.line} />
      </g>
      <g transform={"translate(550,500)"}>
        <line className={classes.line} x1="0" y1="0" x2="-50" y2="-50" />
        <path d="M -73 0 Q -73 -40 -50 -50" className={classes.line} />
      </g>
      <text className={classes.text} transform={"translate(150,150)"}>
        Room 1
      </text>
      <text className={classes.text} transform={"translate(450,100)"}>
        Room 2
      </text>
      <text className={classes.text} transform={"translate(750,150)"}>
        Room 3
      </text>
      <text className={classes.text} transform={"translate(750,400)"}>
        Bathroom
      </text>
      <text className={classes.text} transform={"translate(200,400)"}>
        Kitchen
      </text>
    </g>
  );
};
