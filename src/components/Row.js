import Pixel from "./Pixel";

function Row({ size, pixelColor }) {
  let columns = [];

  for (let i = 0; i < size; i++) {
    columns.push(<Pixel key={i} size={size} pixelColor={pixelColor} />);
  }

  return <div>{columns}</div>;
}

export default Row;
