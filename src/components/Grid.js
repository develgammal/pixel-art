import StyledGrid from "./styles/Grid.styled";
import Row from "../components/Row";

function Grid() {
  let rows = [];
  let size = 8;
  let pixelColor = "red";

  for (let i = 0; i < size; i++) {
    rows.push(<Row key={i} size={size} pixelColor={pixelColor} />);
  }

  return (
    <StyledGrid>
      <main>{rows}</main>
    </StyledGrid>
  );
}

export default Grid;
