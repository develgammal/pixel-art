import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";
import { useState, useReducer, useEffect, useRef } from "react";

function reducer(state, action) {
  let mDraft = [...action.m];

  switch (action.type) {
    case "topFill":
      mDraft[action.x - 1] !== undefined &&
        mDraft[action.x - 1][action.y] === action.oldColor &&
        (mDraft[action.x - 1][action.y] = action.pixelColor);
      return mDraft;

    case "buttomFill":
      mDraft[action.x + 1] !== undefined &&
        mDraft[action.x + 1][action.y] === action.oldColor &&
        (mDraft[action.x + 1][action.y] = action.pixelColor);
      return mDraft;

    case "leftFill":
      mDraft[action.x] !== undefined &&
        mDraft[action.x][action.y - 1] === action.oldColor &&
        (mDraft[action.x][action.y - 1] = action.pixelColor);
      return mDraft;

    case "rightFill":
      mDraft[action.x] !== undefined &&
        mDraft[action.x][action.y + 1] === action.oldColor &&
        (mDraft[action.x][action.y + 1] = action.pixelColor);
      return mDraft;

    default:
      return state;
  }
}
function Grid({ size, pixelColor, initialMatrix }) {
  const [coordinates, setCoordinates] = useState(null);
  const [matrix, dispatch] = useReducer(reducer, [...initialMatrix]);

  // const fillNodes = useRef([]);

  useEffect(() => {
    if (coordinates !== null) {
      const x = coordinates.x;
      const y = coordinates.y;
      const m = matrix;
      const oldColor = m[x][y];
      m[x][y] = pixelColor;
      dispatch({
        type: "leftFill",
        x: x,
        y: y,
        m: m,
        pixelColor: pixelColor,
        oldColor: oldColor,
        size: size,
      });
      dispatch({
        type: "rightFill",
        x: x,
        y: y,
        m: m,
        pixelColor: pixelColor,
        oldColor: oldColor,
        size: size,
      });
      dispatch({
        type: "topFill",
        x: x,
        y: y,
        m: m,
        pixelColor: pixelColor,
        oldColor: oldColor,
        size: size,
      });
      dispatch({
        type: "buttomFill",
        x: x,
        y: y,
        m: m,
        pixelColor: pixelColor,
        oldColor: oldColor,
        size: size,
      });
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

//TODO possible bug on resizing
