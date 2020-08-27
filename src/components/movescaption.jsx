import React from "react";

const MovesCaption = ({ moves, win, winColor, loseColor }) => (
  <div
    style={{
      display: moves === 0 || win ? "flex" : "block",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    {win && <p style={{ color: winColor || "green" }}>You won</p>}
    {moves === 0 && <p style={{ color: loseColor || "red" }}>You lost</p>}
    <p style={{ textAlign: "right" }}>moves left {moves}</p>
  </div>
);
export default MovesCaption;
