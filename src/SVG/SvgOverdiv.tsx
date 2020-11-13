import React, { useEffect, useState } from "react";
import { useStyles } from "./Style";

const fillFactor = 0.7;
const initZoom = (fillFactor * window.innerHeight) / 500;
const initCords = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

export const SvgOverdiv: React.FC = (props) => {
  const { children } = props;

  const [cords, setCords] = useState(initCords);
  const [zoom, setZoom] = useState(initZoom);
  const [mouseDown, setMouseDown] = useState(false);
  const classes = useStyles();
  const onMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!mouseDown) return;
    setCords({ x: cords.x + event.movementX, y: cords.y + event.movementY });
  };
  const onMouseUp = () => {
    setMouseDown(false);
  };

  const onWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    event.stopPropagation();
    const multiplayer = 0.8;
    const newZoom = event.deltaY < 0 ? zoom / multiplayer : zoom * multiplayer;
    if (newZoom > 0.1 && newZoom < 5) {
      setCords({
        x: event.pageX - ((event.pageX - cords.x) * newZoom) / zoom,
        y: event.pageY - ((event.pageY - cords.y) * newZoom) / zoom,
      });
      setZoom(newZoom);
    }
  };
  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <svg
      onWheel={onWheel}
      className={classes.svg}
      onMouseDown={() => {
        setMouseDown(true);
      }}
      onMouseMove={onMouseMove}
    >
      <g
        className={classes.group}
        style={{
          transition: mouseDown ? "0s all" : undefined,
          transform: `translate(${cords.x}px,${cords.y}px) scale(${zoom})`,
        }}
      >
        <g style={{ transform: "translate(-450px,-250px)" }}>{children}</g>
      </g>
    </svg>
  );
};
