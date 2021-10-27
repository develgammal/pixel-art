import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useReducer, useEffect } from "react";

function reducer(state, action) {
  let mDraft = [...action.m];
  switch (action.type) {
    case "downFill":
      mDraft[action.x] !== undefined &&
        mDraft[action.x][action.y - 1] !== undefined &&
        (mDraft[action.x][action.y - 1] = action.pixelColor);
      return mDraft;

    case "upFill":
      mDraft[action.x] !== undefined &&
        mDraft[action.x][action.y + 1] !== undefined &&
        (mDraft[action.x][action.y + 1] = action.pixelColor);
      return mDraft;

    case "leftFill":
      mDraft[action.x - 1] !== undefined &&
        mDraft[action.x - 1][action.y] !== undefined &&
        (mDraft[action.x - 1][action.y] = action.pixelColor);
      return mDraft;

    case "rightFill":
      mDraft[action.x + 1] !== undefined &&
        mDraft[action.x + 1][action.y] !== undefined &&
        (mDraft[action.x + 1][action.y] = action.pixelColor);
      return mDraft;

    default:
      return state;
  }
}
function Grid({ size, pixelColor, initialMatrix }) {
  const [coordinates, setCoordinates] = useState(null);
  const [matrix, dispatch] = useReducer(reducer, [...initialMatrix]);

  useEffect(() => {
    if (coordinates !== null) {
      const x = coordinates.x;
      const y = coordinates.y;
      const m = matrix;

      m[x][y] = pixelColor;
      dispatch({ type: "downFill", x: x, y: y, m: m, pixelColor: pixelColor });
      dispatch({ type: "upFill", x: x, y: y, m: m, pixelColor: pixelColor });
      dispatch({ type: "leftFill", x: x, y: y, m: m, pixelColor: pixelColor });
      dispatch({ type: "rightFill", x: x, y: y, m: m, pixelColor: pixelColor });
      console.log("matrix", m);
    }
  }, [coordinates]);

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
