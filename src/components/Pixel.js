import StyledPixel from "./styles/Pixel.styled";
import { useState } from "react";

function Pixel({ size, pixelColor, rowId, columnId, setCoordinates, matrix }) {
  const [newColor, setNewColor] = useState("#ffffff");

  return (
    <>
      <StyledPixel
        size={size}
        pixelColor={pixelColor}
        newColor={newColor}
        matrixRender={matrix[columnId][rowId]}
      >
        <div
          onClick={() => {
            setNewColor(pixelColor);
            setCoordinates({ x: columnId, y: rowId });
          }}
        ></div>
      </StyledPixel>
    </>
  );
}

export default Pixel;

// const divEl = useRef(null);
// console.log("divEl is", divEl);

// ref={divEl}

// divEl.current != null &&
//   console.log(
//     "inner color is:",
//     window
//       .getComputedStyle(divEl.current, null)
//       .getPropertyValue("background-color")
//   );
//
//
//
//
//
//
//

//  TODO
