import React from "react";
import Grid from "./components/grid";
import MovesCaption from "./components/movescaption";
import {
  walls,
  columns,
  rows,
  isAValidMove,
  area,
} from "./constants/constants";

const App = () => {
  const [userPosition, setUserPosition] = React.useState(0);
  const [moves, setMoves] = React.useState(10);
  const [win, setWin] = React.useState(false);
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    const handleKey = ({ key }) => {
      const newPosition = isAValidMove(key, userPosition, moves);
      if (typeof newPosition === "number") {
        setUserPosition(newPosition);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [moves, userPosition]);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (userPosition === area - 1) {
      return setWin(true);
    }
    setMoves((moves) => moves - 1);
  }, [userPosition]);

  return (
    <div
      style={{
        width: "200px",
        margin: "0 auto",
      }}
    >
      <Grid
        walls={walls}
        userPosition={userPosition}
        rows={rows}
        columns={columns}
        initialPosition={0}
      />
      <MovesCaption win={win} style={{ alignSelf: "flex-end" }} moves={moves} />
    </div>
  );
};

export default App;
