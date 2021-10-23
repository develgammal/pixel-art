import StyledPixel from "./styles/Pixel.styled";
import { useState } from "react";

function Pixel({ size, pixelColor, rowId, columnId }) {
  const [newColor, setNewColor] = useState("white");

  const handleClick = () => {
    setNewColor(pixelColor);
    console.log("rowId is", rowId); //TODO return this function inside the div
    console.log("columnId is", columnId); //TODO return this function inside the div
  };

  return (
    <StyledPixel size={size} pixelColor={pixelColor} newColor={newColor}>
      <div
        onClick={() => {
          handleClick();
        }}
      ></div>
    </StyledPixel>
  );
}

export default Pixel;
