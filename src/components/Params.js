import StyledParams from "./styles/Params.styled";
import Grid from "../components/Grid";
import { CirclePicker } from "react-color";

//img imports
import logoImg from "../img/logo.png";
import penImg from "../img/pen.png";
import bucketImg from "../img/bucket.png";
import paletteImg from "../img/palette.png";
import eraserImg from "../img/eraser.svg";

function Params() {
  return (
    <div className="wrapper">
      <StyledParams>
        <div className="params-wrapper">
          <header>
            <img src={logoImg} alt="Logo" width="40px" />
            <h1>Pixel Art</h1>
          </header>
          <section>
            <a href="/">Reset</a>
          </section>
          <section className="grid-size">
            <button>8x8</button>
            <button>12x12</button>
            <button>16x16</button>
            <button>32x32</button>
          </section>
          <section className="fill-type">
            <button>
              <img src={bucketImg} alt="bucket" width="45px" />
            </button>
            <button>
              <img src={penImg} alt="pen" width="40px" />
            </button>
            <button>
              <img src={eraserImg} alt="eraser" width="40px" />
            </button>
          </section>
          <section className="color-selector">
            <CirclePicker />
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
      <Grid />
    </div>
  );
}

export default Params;
