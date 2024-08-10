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

/**
 * Renders the side panel component for the pixel art application.
 *
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the grid.
 * @param {function} props.setSize - The function to set the size of the grid.
 * @param {Array} props.initialMatrix - The initial matrix for the grid.
 * @param {Array} props.matrix - The current matrix for the grid.
 * @param {function} props.setMatrix - The function to set the matrix for the grid.
 * @param {function} props.setDarkMode - The function to toggle dark mode.
 * @param {boolean} props.darkMode - The current dark mode state.
 * @returns {JSX.Element} The rendered side panel component.
 */
function SidePanel({
  size,
  setSize,
  initialMatrix,
  matrix,
  setMatrix,
  setDarkMode,
  darkMode,
}) {
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

          {/* page and theme resets */}
          <section className="resets">
            <div className="tooltip">
              <button
                className="page-reset"
                onClick={() => {
                  setSize(8);
                  setMatrix(initialMatrix);
                }}
              >
                &#128472;
              </button>
              <span className="tooltiptext">Reset the Grid</span>
            </div>
            <div className="tooltip">
              <button
                className="theme"
                onClick={() => {
                  darkMode === false ? setDarkMode(true) : setDarkMode(false);
                }}
              >
                &#127768;
              </button>
              <span className="tooltiptext">Toggle Dark Mode</span>
            </div>
          </section>

          {/* size settings */}

          <section className="grid-size">
            <div className="tooltip">
              <button
                className="size8"
                onClick={() => {
                  setSize(8);
                  setSizesActiveSelection("size8");
                }}
              >
                8x8
              </button>
              <span className="tooltiptext">Set Grid Size to 8x8</span>
            </div>
            <div className="tooltip">
              <button
                className="size12"
                onClick={() => {
                  setSize(12);
                  setSizesActiveSelection("size12");
                }}
              >
                12x12
              </button>
              <span className="tooltiptext">Set Grid Size to 12x12</span>
            </div>
            <div className="tooltip">
              <button
                className="size16"
                onClick={() => {
                  setSize(16);
                  setSizesActiveSelection("size16");
                }}
              >
                16x16
              </button>
              <span className="tooltiptext">Set Grid Size to 16x16</span>
            </div>
            <div className="tooltip">
              <button
                className="size32"
                onClick={() => {
                  setSize(32);
                  setSizesActiveSelection("size32");
                }}
              >
                32x32
              </button>
              <span className="tooltiptext">Set Grid Size to 32x32</span>
            </div>
          </section>

          {/* fill settings */}

          <div className="fill-type">
            <div className="tooltip">
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
              <span className="tooltiptext">Pen Tool</span>
            </div>

            <div className="tooltip">
              <button
                className="box-fill"
                onClick={() => {
                  setBoxFillToggle(true);
                  setColorMatchFillToggle(false);
                  setToolsActiveSelection("box-fill");
                }}
              >
                <img src={bucketImg} alt="bucket" width="40px" />
              </button>
              <span className="tooltiptext">Brush Tool</span>
            </div>
            <div className="tooltip">
              <button
                className="color-match-fill"
                onClick={() => {
                  setBoxFillToggle(false);
                  setColorMatchFillToggle(true);
                  setToolsActiveSelection("color-match-fill");
                }}
              >
                <img src={magicImg} alt="magic" width="70px" />
              </button>
              <span className="tooltiptext">Fill All Tool</span>
            </div>
          </div>

          {/* eraser */}

          <section className="color-selector">
            {/* react color library */}

            <div className="tooltip">
              <button
                onClick={() => {
                  setPixelColor("#ffffff");
                }}
              >
                <img src={eraserImg} alt="eraser" width="40px" />
              </button>
              <span className="tooltiptext">White Color</span>
            </div>

            <CirclePicker
              onChangeComplete={(color) => setPixelColor(color.hex)}
              data-tip="Pick a Color"
            />

            <div className="selected-color">
              <img src={paletteImg} alt="palette" width="50px" />
              <div className="displayed-color" />
            </div>
          </section>

          <section className="download">
            {/* react-component-export-image library */}
            <div className="tooltip">
              <button onClick={() => exportComponentAsJPEG(GridEl)}>
                Download .jpg
              </button>
              <span className="tooltiptext">Download as JPG</span>
            </div>
            <div className="tooltip">
              <button onClick={() => exportComponentAsPNG(GridEl)}>
                Download .png
              </button>
              <span className="tooltiptext">Download as PNG</span>
            </div>
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
