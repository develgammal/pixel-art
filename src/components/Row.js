import Pixel from "./Pixel";

function Row({ size, pixelColor, rowId, setCoordinates, matrix }) {
  let columns = [];

  for (let i = 0; i < size; i++) {
    columns.push(
      <Pixel
        size={size}
        pixelColor={pixelColor}
        matrix={matrix}
        setCoordinates={setCoordinates}
        rowId={rowId}
        columnId={i}
        key={i}
      />
    );
  }

  return <div>{columns}</div>;
}

export default Row;
