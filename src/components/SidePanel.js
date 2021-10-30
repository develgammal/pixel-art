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

function SidePanel({ size, setSize, initialMatrix, matrix, setMatrix }) {
  const [boxFillToggle, setBoxFillToggle] = useState(false);
  const [colorMatchFillToggle, setColorMatchFillToggle] = useState(false);
  const [sizesActiveSelection, setSizesActiveSelection] = useState("size8");
  const [toolsActiveSelection, setToolsActiveSelection] = useState("pen-fill");
  const [pixelColor, setPixelColor] = useState("#ffffff");

  const GridEl = useRef(null);

  return (
    <div className="wrapper">
      <StyledSidePanel
        pixelColor={pixelColor}
        sizesActiveSelection={sizesActiveSelection}
        toolsActiveSelection={toolsActiveSelection}
      >
        <div className="panel-wrapper">
          {/* header */}
          <header>
            <img src={logoImg} alt="Logo" width="40px" />
            <h1>Pixel Art</h1>
          </header>

          {/* reset */}
          <section>
            <button
              className="reset"
              onClick={() => {
                setSize(8);
                setMatrix(initialMatrix);
              }}
            >
              &#128472;
            </button>
          </section>

          {/* size settings */}

          <section className="grid-size">
            <button
              className="size8"
              onClick={() => {
                setSize(8);
                setSizesActiveSelection("size8");
              }}
            >
              8x8
            </button>
            <button
              className="size12"
              onClick={() => {
                setSize(12);
                setSizesActiveSelection("size12");
              }}
            >
              12x12
            </button>
            <button
              className="size16"
              onClick={() => {
                setSize(16);
                setSizesActiveSelection("size16");
              }}
            >
              16x16
            </button>
            <button
              className="size32"
              onClick={() => {
                setSize(32);
                setSizesActiveSelection("size32");
              }}
            >
              32x32
            </button>
          </section>

          {/* fill settings */}

          <div className="fill-type">
            <button
              className="pen-fill"
              onClick={() => {
                setBoxFillToggle(false);
                setColorMatchFillToggle(false);
                setToolsActiveSelection("pen-fill");
              }}
            >
              <img src={penImg} alt="pen" width="40px" />
            </button>

            <button
              className="box-fill"
              onClick={() => {
                setBoxFillToggle(true);
                setColorMatchFillToggle(false);
                setToolsActiveSelection("box-fill");
              }}
            >
              <img src={bucketImg} alt="bucket" width="45px" />
            </button>
            <button
              className="color-match-fill"
              onClick={() => {
                setBoxFillToggle(false);
                setColorMatchFillToggle(true);
                setToolsActiveSelection("color-match-fill");
              }}
            >
              <img src={magicImg} alt="magic" width="40px" />
            </button>
          </div>

          {/* eraser */}

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
          size={size}
          matrix={matrix}
          setMatrix={setMatrix}
          initialMatrix={initialMatrix}
          pixelColor={pixelColor}
          boxFillToggle={boxFillToggle}
          colorMatchFillToggle={colorMatchFillToggle}
        />
      </div>
    </div>
  );
}

export default SidePanel;
