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
  const [fillToggle, setFillToggle] = useState(false);
  const [layerFillToggle, setLayerFillToggle] = useState(false);
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
          <header>
            <img src={logoImg} alt="Logo" width="40px" />
            <h1>Pixel Art</h1>
          </header>

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

          <div className="fill-type">
            <button
              className="pen-fill"
              onClick={() => {
                setFillToggle(false);
                setLayerFillToggle(false);
                setToolsActiveSelection("pen-fill");
              }}
            >
              <img src={penImg} alt="pen" width="40px" />
            </button>

            <button
              className="neighbour-fill"
              onClick={() => {
                setFillToggle(true);
                setLayerFillToggle(false);
                setToolsActiveSelection("neighbour-fill");
              }}
            >
              <img src={bucketImg} alt="bucket" width="45px" />
            </button>
            <button
              className="Layer-fill"
              onClick={() => {
                setFillToggle(false);
                setLayerFillToggle(true);
                setToolsActiveSelection("Layer-fill");
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
          size={size}
          matrix={matrix}
          setMatrix={setMatrix}
          initialMatrix={initialMatrix}
          pixelColor={pixelColor}
          fillToggle={fillToggle}
          layerFillToggle={layerFillToggle}
        />
      </div>
    </div>
  );
}

export default SidePanel;
