import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useRef } from "react";

function Grid({ size, pixelColor, initialMatrix }) {
  const [coordinates, setCoordinates] = useState(null);
  console.log("coordinates", coordinates);

  const matrix = useRef([...initialMatrix]);

  coordinates !== null &&
    (matrix.current[coordinates.x][coordinates.y] = pixelColor);

  console.log("matrix", matrix);

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
