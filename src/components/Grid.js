import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState } from "react";

function Grid({ size, pixelColor }) {
  const [coordinates, setCoordinates] = useState({});
  console.log("coordinates", coordinates);

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
