import styled from "styled-components";

// Define a styled component called StyledSidePanel
const StyledSidePanel = styled.div`
  // Styling for the panel wrapper
  .panel-wrapper {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.fg}; // Use the foreground color from the theme
    width: 30vw;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
  }

  // Styling for the header and section elements
  header,
  section {
    margin: 10px 0;
  }

  // Styling for the header
  header {
    display: flex;
    margin: 20px 0;
  }

  // Styling for the h1 element
  h1 {
    font-family: "Nova Square", cursive;
    font-weight: 800;
  }

  // Styling for the a element
  a {
    font-size: 2rem;
  }

  // Styling for the a and button elements
  a,
  button {
    background-color: white;
    padding: 5px;
    margin: 2px;
    border-radius: 10px;
  }

  // Styling for the resets section
  .resets {
    display: flex;
    justify-content: space-between;
  }

  // Styling for the page reset button
  .page-reset {
    font-size: 2rem;
  }

  // Styling for the theme selector
  .theme {
    font-size: 1.5rem;
  }

  // Styling for the active size selection
  .${(props) => props.sizesActiveSelection} {
    font-size: 1.2rem;
    border: 5px solid white;
    border-radius: 10px;
    background-color: white;
  }

  // Styling for the active tool selection
  .${(props) => props.toolsActiveSelection} {
    border: 10px solid white;
    border-radius: 10px;
    background-color: white;
  }

  // Styling for the color selector
  .color-selector {
    display: flex;
  }

  // Styling for the eraser tool
  .eraser {
    width: 70px;
  }

  // Styling for the displayed color
  .displayed-color {
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.pixelColor}; // Use the pixelColor prop as the background color
    border-radius: 50%;
    margin-left: 10px;
  }

  // Styling for the selected color
  .selected-color {
    margin: 0 20px;
  }

  // Styling for the download button
  .download {
    margin-top: 20px;
  }

  // Styling for the tooltip
  .tooltip {
    position: relative;
    display: inline-block;
  }

  // Styling for the tooltip text
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Position above the tooltip element */
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  // Show the tooltip text when hovering over the tooltip element
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export default StyledSidePanel;
