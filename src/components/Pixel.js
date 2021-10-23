import StyledPixel from "./styles/Pixel.styled";
import React, { useState } from "react";

function Pixel({ size, pixelColor }) {
  const [newColor, setNewColor] = useState("white");
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
