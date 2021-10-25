import Row from "./Row";
import StyledGrid from "./styles/Grid.styled";

function Grid({ size, pixelColor }) {
  let rows = [];

  for (let i = 0; i < size; i++) {
    rows.push(<Row columnId={i} key={i} size={size} pixelColor={pixelColor} />);
  }

  return (
    <StyledGrid>
      <div className="grid-wrapper">
        <aside>
          {size}x{size}
        </aside>
        <main>{rows}</main>
      </div>
    </StyledGrid>
  );
}
export default Grid;
