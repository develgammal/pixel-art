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
