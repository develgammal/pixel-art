import Pixel from "../components/Pixel";

function Row({ size, pixelColor, columnId }) {
  let columns = [];

  for (let i = 0; i < size; i++) {
    columns.push(
      <Pixel
        rowId={i}
        key={i}
        columnId={columnId}
        size={size}
        pixelColor={pixelColor}
      />
    );
  }

  return <div>{columns}</div>;
}

export default Row;
