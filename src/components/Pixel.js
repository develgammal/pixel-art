import StyledPixel from "./styles/Pixel.styled";
import { useState } from "react";

function Pixel({ size, pixelColor }) {
  const [newColor, setNewColor] = useState("#ffffff");

  return (
    <StyledPixel size={size} pixelColor={pixelColor} newColor={newColor}>
      <div
        onClick={() => {
          setNewColor(pixelColor);
        }}
      ></div>
    </StyledPixel>
  );
}

export default Pixel;
