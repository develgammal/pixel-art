import { useState } from "react";
import SidePanel from "./SidePanel";

function SizeControl() {
  const [size, setSize] = useState(8);

  let initialMatrix = [];

  for (let i = 0; i < size; i++) {
    initialMatrix.push(Array(size).fill("#ffffff"));
  }

  return (
    <SidePanel initialMatrix={initialMatrix} size={size} setSize={setSize} />
  );
}
export default SizeControl;
