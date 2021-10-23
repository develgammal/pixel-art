import styled from "styled-components";

const StyledPixel = styled.div`
  div {
    width: calc(40vw / ${(props) => props.size});
    height: calc(40vw / ${(props) => props.size});
    border: 1px solid;
    background-color: ${(props) => props.newColor};
  }
  div:hover {
    background-color: ${(props) => props.pixelColor};
  }
`;

export default StyledPixel;
