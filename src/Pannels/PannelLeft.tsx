import classes from "*.module.css";
import React, { useState } from "react";
import { Arrow } from "./Arrow";
import { useStyles } from "./Style";

export const PannelLeft: React.FC = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={classes.pannelLeft}
      style={{
        width: collapsed ? 0 : undefined,
      }}
    >
      <div
        className={classes.arrow}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <Arrow collapsed={collapsed} />
      </div>
      <div className={classes.body}>asgdsdag</div>
    </div>
  );
};
