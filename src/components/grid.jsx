import React from "react";
import GridItem from "./griditem";
import Ball from "./ball";

const Grid = ({
  rows,
  columns,
  userPosition,
  width,
  height,
  initialPosition,
  walls,
}) => {
  const area = rows * columns;

  const backgroundColors = {
    [initialPosition]: "yellow",
    [area - 1]: "green",
    wall: "lightgrey",
  };

  const isItemWall = (item) => walls.includes(item);

  return (
    <div
      style={{
        width: width || "200px",
        height: height || "200px",
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        margin: "0 auto",
        borderTop: "1px solid black",
        borderLeft: "1px solid black",
      }}
    >
      {area
        ? Array.from(Array(area).keys()).map((item, index) => {
            if (index === userPosition) {
              return (
                <GridItem key={item} background={backgroundColors[index]}>
                  <Ball width="20px" height="20px" />
                </GridItem>
              );
            }
            return (
              <GridItem
                key={item}
                background={
                  backgroundColors[isItemWall(index) ? "wall" : index]
                }
              />
            );
          })
        : null}
    </div>
  );
};
export default Grid;
