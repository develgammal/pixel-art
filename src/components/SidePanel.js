import StyledSidePanel from "./styles/SidePanel.styled";
import Grid from "./Grid";
import { useState, useRef } from "react";
import { CirclePicker } from "react-color";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

//img imports
import logoImg from "../img/logo.png";
import paletteImg from "../img/palette.png";
import eraserImg from "../img/eraser.svg";

function SidePanel({ size, setSize, initialMatrix }) {
  const [pixelColor, setPixelColor] = useState("#ffffff");
  const GridEl = useRef(null);

  return (
    <div className="wrapper">
      <StyledSidePanel pixelColor={pixelColor}>
        <div className="panel-wrapper">
          <header>
            <img src={logoImg} alt="Logo" width="40px" />
            <h1>Pixel Art</h1>
          </header>

          <section>
            <a href="/">&#128472;</a>
          </section>

          <section className="grid-size">
            <button onClick={() => setSize(8)}>8x8</button>
            <button onClick={() => setSize(12)}>12x12</button>
            <button onClick={() => setSize(16)}>16x16</button>
            <button onClick={() => setSize(32)}>32x32</button>
          </section>

          <section className="eraser">
            <button onClick={() => setPixelColor("#ffffff")}>
              <img src={eraserImg} alt="eraser" width="40px" />
            </button>
          </section>

          <section className="color-selector">
            {/* react color library */}
            <CirclePicker
              onChangeComplete={(color) => setPixelColor(color.hex)}
            />

            <div className="selected-color">
              <img src={paletteImg} alt="palette" width="50px" />
              <div className="displayed-color" />
            </div>
          </section>

          <section className="download">
            {/* react-component-export-image library */}
            <button onClick={() => exportComponentAsJPEG(GridEl)}>
              Download .jpg
            </button>
            <button onClick={() => exportComponentAsPNG(GridEl)}>
              Download .png
            </button>
          </section>
        </div>
      </StyledSidePanel>
      <div ref={GridEl}>
        <Grid
          initialMatrix={initialMatrix}
          size={size}
          pixelColor={pixelColor}
        />
      </div>
    </div>
  );
}

export default SidePanel;
