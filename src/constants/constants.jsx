export const walls = [5, 6, 8, 9, 10, 11, 13, 14, 18, 19, 20, 21];
export const columns = 5;
export const rows = 5;
export const area = columns * rows;
export const isItemWall = (item) => walls.includes(item);
export const isAValidMove = (key, position, moves) => {
  if (area - 1 === position) {
    return;
  }
  if (moves === 0) {
    return;
  }
  if (key === "ArrowUp") {
    const newPosition = position - columns;
    if (position >= columns && !isItemWall(newPosition)) {
      return newPosition;
    }
  }
  if (key === "ArrowDown") {
    const downLimit = area - columns;
    const newPosition = position + columns;
    if (position < downLimit && position < area && !isItemWall(newPosition)) {
      return newPosition;
    }
  }
  if (key === "ArrowRight") {
    const newPosition = position + 1;
    if (position < area - 1 && !isItemWall(newPosition)) {
      return newPosition;
    }
  }
  if (key === "ArrowLeft") {
    const cantGoLeft = position === 0;
    const newPosition = position - 1;
    if (!cantGoLeft && !isItemWall(newPosition)) {
      return newPosition;
    }
  }
};
