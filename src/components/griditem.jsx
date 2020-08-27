import React from "react";

const GridItem = ({ children, background }) => (
  <div
    data-testid="gridItem"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: " 1px solid black",
      borderRight: "1px solid black",
      background: background || "transparent",
    }}
  >
    {children}
  </div>
);

export default GridItem;
