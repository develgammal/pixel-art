import StyledParams from "./styles/Params.styled";
import Grid from "../components/Grid";
import { CirclePicker } from "react-color";
import { useState } from "react";

//img imports
import logoImg from "../img/logo.png";
import penImg from "../img/pen.png";
import bucketImg from "../img/bucket.png";
import paletteImg from "../img/palette.png";
import eraserImg from "../img/eraser.svg";

function Params() {
  const [size, setSize] = useState(8);
  const [pixelColor, setPixelColor] = useState("white");

  return (
    <div className="wrapper">
      <StyledParams pixelColor={pixelColor}>
        <div className="params-wrapper">
          <header>
            <img src={logoImg} alt="Logo" width="40px" />
            <h1>Pixel Art</h1>
          </header>

          <section>
            <a href="/">Reset</a>
          </section>

          <section className="grid-size">
            <button onClick={() => setSize(8)}>8x8</button>
            <button onClick={() => setSize(12)}>12x12</button>
            <button onClick={() => setSize(16)}>16x16</button>
            <button onClick={() => setSize(32)}>32x32</button>
          </section>

          <section className="fill-type">
            <button>
              <img src={penImg} alt="pen" width="40px" />
            </button>
            <button>
              <img src={bucketImg} alt="bucket" width="45px" />
            </button>
            <div className="eraser">
              <button onClick={() => setPixelColor("white")}>
                <img src={eraserImg} alt="eraser" width="40px" />
              </button>
            </div>
          </section>

          <section className="color-selector">
            <CirclePicker
              onChangeComplete={(color) => setPixelColor(color.hex)}
            />
            <div className="selected-color">
              <img src={paletteImg} alt="palette" width="50px" />
              <div className="displayed-color">
                <span></span>
              </div>
            </div>
          </section>

          <section className="download">
            <button className="jpg">Download .jpg</button>
            <button className="png">Download .png</button>
            <button className="gif">Download .gif</button>
          </section>
        </div>
      </StyledParams>
      <Grid size={size} pixelColor={pixelColor} />
    </div>
  );
}

export default Params;
