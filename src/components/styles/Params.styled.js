import styled from "styled-components";

const StyledParams = styled.div`
  .params-wrapper {
    display: flex;
    flex-flow: column nowrap;
    background-color: whitesmoke;
    width: 30vw; //TODO
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
  }

  header,
  section {
    margin: 10px 0;
  }
  header {
    display: flex;
    margin: 20px 0;
  }
  h1 {
    font-family: "Nova Square", cursive;
    font-weight: 800;
  }
  a {
    width: 55px;
  }
  a,
  button {
    background-color: white;
    padding: 5px;
    margin: 2px;
    border-radius: 10px;
  }
  .color-selector {
    display: flex;
  }

  .displayed-color {
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.pixelColor};
    border-radius: 50%;
    margin-left: 10px;
  }
  .selected-color {
    margin: 0 20px;
  }
  .eraser {
    margin-top: 20px;
  }

  .download {
    margin-top: 20px;
  }
`;

export default StyledParams;
