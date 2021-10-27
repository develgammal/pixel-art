import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useRef } from "react";

function Grid({ size, pixelColor, initialMatrix }) {
  const matrix = useRef([...initialMatrix]);
  const [coordinates, setCoordinates] = useState(null);

  coordinates !== null &&
    (matrix.current[coordinates.x][coordinates.y] = pixelColor);

  //bucket fill selection logic

  if (coordinates !== null) {
    function fill(m, x, y, pixelColor) {
      //If row is less than 0
      if (x < 0 || m[x][y] !== m[x - 1][y]) {
        return;
      }

      //If column is less than 0
      if (y < 0 || m[x][y] !== m[x][y - 1]) {
        return;
      }

      //If row is greater than m length
      if (x > size - 1 || m[x][y] !== m[x + 1][y]) {
        return;
      }

      //If column is greater than m length
      if (y > size - 1 || m[x][y] !== m[x][y + 1]) {
        return;
      }

      m[x][y] = pixelColor;
      //Fill in all four directions
      //Fill Prev row
      fill(m, x - 1, y, pixelColor);

      //Fill Next row
      fill(m, x + 1, y, pixelColor);

      //Fill Prev col
      fill(m, x, y - 1, pixelColor);

      //Fill next col
      fill(m, x, y + 1, pixelColor);
    }
    let x = coordinates.x;
    let y = coordinates.y;
    let m = matrix.current;

    fill(m, x, y, pixelColor);
    console.log("matrix", m);
  }

  //   //step up neighbour pixel check
  //   for (let r = y; r < size; r++) {
  //     if (
  //       m[x][r] !== m[x][r + 1] ||
  //       m[x][r] === undefined ||
  //       m[x][r + 1] === undefined
  //     )
  //       break;
  //     //step right neighbour pixel check

  //     for (let i = x; i < size; i++) {
  //       if (
  //         m[i][r] !== m[i + 1][r] ||
  //         m[i][r] === undefined ||
  //         m[i + 1][r] === undefined
  //       )
  //         break;
  //       areaCoordinates.push(`pixel-${i}${r},`);
  //     }
  //     //step left neighbour pixel check
  //     for (let i = x; i > 0; i--) {
  //       if (
  //         m[i][r] !== m[i - 1][r] ||
  //         m[i][r] === undefined ||
  //         m[i - 1][r] === undefined
  //       )
  //         break;
  //       areaCoordinates.push(`pixel-${i}${r},`);
  //     }
  //   }

  //   //step down neighbour pixel check
  //   for (let r = y; r > 0; r--) {
  //     if (
  //       m[x][r] !== m[x][r - 1] ||
  //       m[x][r] === undefined ||
  //       m[x][r - 1] === undefined
  //     )
  //       break;

  //     //step right neighbour pixel check
  //     for (let i = x; i < size; i++) {
  //       if (
  //         m[i][r] !== m[i + 1][r] ||
  //         m[i][r] === undefined ||
  //         m[i + 1][r] === undefined
  //       )
  //         break;
  //       areaCoordinates.push(`pixel-${i}${r},`);
  //     }
  //     //step left neighbour pixel check
  //     for (let i = x; i > 0; i--) {
  //       if (
  //         m[i][r] !== m[i - 1][r] ||
  //         m[i][r] === undefined ||
  //         m[i - 1][r] === undefined
  //       )
  //         break;
  //       areaCoordinates.push(`pixel-${i}${r},`);
  //     }
  //   }
  // }

  // console.log("matrix", matrix);
  // console.log("areaCoordinates", areaCoordinates);

  let rows = [];

  for (let i = 0; i < size; i++) {
    rows.push(
      <Row
        setCoordinates={setCoordinates}
        rowId={i}
        key={i}
        size={size}
        pixelColor={pixelColor}
      />
    );
  }

  return (
    <StyledGrid>
      <div className="grid-wrapper">
        <aside>
          {size}x{size}
        </aside>
        <main>{rows}</main>
      </div>
    </StyledGrid>
  );
}
export default Grid;
