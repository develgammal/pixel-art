/**
 * StyledPixel component for rendering a styled pixel element.
 *
 * @component
 * @example
 * // Usage:
 * // import StyledPixel from "./Pixel.styled.js";
 * // <StyledPixel size={10} newColor="#FF0000" matrixRender="#00FF00" pixelColor="#0000FF" />
 *
 * @param {Object} props - The properties object.
 * @param {number} props.size - The size of the pixel.
 * @param {string} props.newColor - The background color of the pixel.
 * @param {string} props.matrixRender - The background color of the pixel for matrix rendering.
 * @param {string} props.pixelColor - The background color of the pixel on hover.
 * @returns {JSX.Element} The styled pixel component.
 */
import styled from "styled-components";

const StyledPixel = styled.div`
  div {
    width: calc(40vw / ${(props) => props.size});
    height: calc(40vw / ${(props) => props.size});
    background-color: ${(props) => props.newColor};
    background-color: ${(props) => props.matrixRender};
    border: 1px solid;
  }
  div:hover {
    background-color: ${(props) => props.pixelColor};
  }
`;

export default StyledPixel;
