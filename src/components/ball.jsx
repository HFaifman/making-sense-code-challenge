import React from "react";

const Ball = ({ width, height, color }) => (
  <div
    data-testid="ball"
    style={{
      background: color || "white",
      position: "absolute",
      borderRadius: "50%",
      width: width,
      height: height,
      border: "2px solid black",
    }}
  />
);

export default Ball;
