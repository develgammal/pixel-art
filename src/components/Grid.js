import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useEffect } from "react";

function Grid({
  size,
  pixelColor,
  matrix,
  setMatrix,
  boxFillToggle,
  colorMatchFillToggle,
}) {
  const [coordinates, setCoordinates] = useState(null);

  //The two fill algorithems
  useEffect(() => {
    if (coordinates !== null) {
      const x = coordinates.x;
      const y = coordinates.y;
      const m = matrix;
      const oldColor = m[x][y];
      let mDraft = [...m];

      mDraft[x][y] = pixelColor;

      //box fill algorithems
      if (boxFillToggle === true) {
        // top  Fill
        mDraft[x - 1] !== undefined &&
          mDraft[x - 1][y] === oldColor &&
          (mDraft[x - 1][y] = pixelColor);

        // top right Fill
        mDraft[x - 1] !== undefined &&
          mDraft[x - 1][y + 1] === oldColor &&
          (mDraft[x - 1][y + 1] = pixelColor);

        // top left Fill
        mDraft[x - 1] !== undefined &&
          mDraft[x - 1][y - 1] === oldColor &&
          (mDraft[x - 1][y - 1] = pixelColor);

        // buttom Fill
        mDraft[x + 1] !== undefined &&
          mDraft[x + 1][y] === oldColor &&
          (mDraft[x + 1][y] = pixelColor);

        // buttom left Fill
        mDraft[x + 1] !== undefined &&
          mDraft[x + 1][y - 1] === oldColor &&
          (mDraft[x + 1][y - 1] = pixelColor);
        // buttom right Fill
        mDraft[x + 1] !== undefined &&
          mDraft[x + 1][y + 1] === oldColor &&
          (mDraft[x + 1][y + 1] = pixelColor);

        // left Fill
        mDraft[x] !== undefined &&
          mDraft[x][y - 1] === oldColor &&
          (mDraft[x][y - 1] = pixelColor);

        // right Fill
        mDraft[x] !== undefined &&
          mDraft[x][y + 1] === oldColor &&
          (mDraft[x][y + 1] = pixelColor);
      }

      //color match fill algorithem

      if (colorMatchFillToggle === true) {
        for (let r = 0; r < mDraft.length; r++) {
          const element = mDraft[r];

          for (let c = 0; c < element.length; c++) {
            element[c] === oldColor && (mDraft[r][c] = pixelColor);
          }
        }
      }

      setMatrix(mDraft);
    }
  }, [coordinates]); //eslint-disable-line

  let rows = [];

  for (let i = 0; i < size; i++) {
    rows.push(
      <Row
        size={size}
        pixelColor={pixelColor}
        matrix={matrix}
        setCoordinates={setCoordinates}
        rowId={i}
        key={i}
      />
    );
  }

  return (
    <StyledGrid>
      <div className="grid-wrapper">
        <main>{rows}</main>
      </div>
    </StyledGrid>
  );
}
export default Grid;
