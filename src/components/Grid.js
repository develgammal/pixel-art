import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useEffect, useRef } from "react";

function Grid({ size, pixelColor, initialMatrix }) {
  const [coordinates, setCoordinates] = useState(null);
  const [matrix, setMatrix] = useState([...initialMatrix]);
  const FillToggle = useRef(false);
  const magicFillToggle = useRef(false);

  useEffect(() => {
    if (coordinates !== null) {
      const x = coordinates.x;
      const y = coordinates.y;
      const m = matrix;
      const oldColor = m[x][y];
      let mDraft = [...m];

      mDraft[x][y] = pixelColor;

      if (FillToggle.current === true) {
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

      if (magicFillToggle.current === true) {
        function halfFill(r) {
          function quarterFill(y) {
            mDraft[r] !== undefined &&
              mDraft[r][y] === oldColor &&
              (mDraft[r][y] = pixelColor);
            return mDraft;
          }
          // fill left
          for (let i = y - 1; i >= 0; i--) {
            if (mDraft[x] === undefined && mDraft[x][i] !== oldColor) break;
            quarterFill(i);
          }
          // fill right
          for (let i = y; i < size; i++) {
            if (mDraft[x] === undefined && mDraft[x][i] !== oldColor) break;
            quarterFill(i);
          }
        }
        // fill bottom
        for (let r = x; r < size; r++) {
          if (mDraft[r] === undefined && mDraft[r][y] !== oldColor) break;
          halfFill(r);
        }
        // fill Top
        for (let r = x; r >= 0; r--) {
          if (mDraft[r] === undefined && mDraft[r][y] !== oldColor) break;
          halfFill(r);
        }
      }

      setMatrix(mDraft);

      console.log("matrix", m); //TODO
    }
  }, [coordinates]);

  let rows = [];

  for (let i = 0; i < size; i++) {
    rows.push(
      <Row
        setCoordinates={setCoordinates}
        matrix={matrix}
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
        <button
          onClick={() => {
            magicFillToggle.current = !magicFillToggle.current;
          }}
        >
          Cool: {JSON.stringify(magicFillToggle.current)}
        </button>
        <button
          onClick={() => {
            FillToggle.current = !FillToggle.current;
          }}
        >
          Normal: {JSON.stringify(FillToggle.current)}
        </button>
        <aside>
          {size}x{size}
        </aside>
        <main>{rows}</main>
      </div>
    </StyledGrid>
  );
}
export default Grid;

//TODO possible bug on resizing
