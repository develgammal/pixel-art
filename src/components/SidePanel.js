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
import penImg from "../img/pen.png";
import bucketImg from "../img/bucket.png";
import magicImg from "../img/magic.png";
import eraserImg from "../img/eraser.svg";

function SidePanel({ size, setSize, initialMatrix }) {
  const [pixelColor, setPixelColor] = useState("#ffffff");
  const [fillToggle, setFillToggle] = useState(false);
  const [magicFillToggle, setMagicFillToggle] = useState(false);
  const [activeSelection, setActiveSelection] = useState("pen");

  const GridEl = useRef(null);
  //TODO

  // fix sizing bug maybe by matrix reset n then the reset button is also following same logic just same size
  // clean code
  // use context provider
  // clean all
  // check todos console n comments
  // elaborate your code with comments
  // merge to fill feature branch
  // push n merge n update readme with gif of two algorithems and how proud you are
  // show shehata
  // learn redux
  return (
    <div className="wrapper">
      <StyledSidePanel
        pixelColor={pixelColor}
        activeSelection={activeSelection}
      >
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
          <div className="fill-type">
            <button
              className="pen"
              onClick={() => {
                setFillToggle(false);
                setMagicFillToggle(false);
                setActiveSelection("pen");
              }}
            >
              <img src={penImg} alt="pen" width="40px" />
            </button>

            <button
              className="bucket"
              onClick={() => {
                setFillToggle(true);
                setMagicFillToggle(false);
                setActiveSelection("bucket");
              }}
            >
              <img src={bucketImg} alt="bucket" width="45px" />
            </button>

            <button
              className="magic"
              onClick={() => {
                setFillToggle(false);
                setMagicFillToggle(true);
                setActiveSelection("magic");
              }}
            >
              <img src={magicImg} alt="magic" width="40px" />
            </button>
          </div>

          <section className="eraser">
            <button
              onClick={() => {
                setPixelColor("#ffffff");
              }}
            >
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
          fillToggle={fillToggle}
          magicFillToggle={magicFillToggle}
          initialMatrix={initialMatrix}
          size={size}
          pixelColor={pixelColor}
        />
      </div>
    </div>
  );
}

export default SidePanel;
