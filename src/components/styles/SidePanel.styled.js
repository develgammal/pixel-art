import styled from "styled-components";

const StyledSidePanel = styled.div`
  .panel-wrapper {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.fg};
    width: 30vw;
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
    font-size: 2rem;
  }

  a,
  button {
    background-color: white;
    padding: 5px;
    margin: 2px;
    border-radius: 10px;
  }

  .resets {
    display: flex;
    justify-content: space-between;
  }
  .page-reset {
    font-size: 2rem;
  }
  .theme {
    font-size: 1.5rem;
  }

  .${(props) => props.sizesActiveSelection} {
    font-size: 1.2rem;
    border: 5px solid white;
    border-radius: 10px;
    background-color: white;
  }
  .${(props) => props.toolsActiveSelection} {
    border: 10px solid white;
    border-radius: 10px;
    background-color: white;
  }
  .color-selector {
    display: flex;
  }

  .eraser {
    width: 70px;
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

  .download {
    margin-top: 20px;
  }
`;

export default StyledSidePanel;
