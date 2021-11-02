import { useState, useEffect } from "react";
import SidePanel from "./SidePanel";

function SizeControl({ setDarkMode, darkMode }) {
  const [size, setSize] = useState(8);

  let initialMatrix = [];
  for (let i = 0; i < size; i++) {
    initialMatrix.push(Array(size).fill("#ffffff"));
  }

  const [matrix, setMatrix] = useState([initialMatrix]);

  useEffect(() => {
    setMatrix(initialMatrix);
  }, [size]); //eslint-disable-line

  return (
    <SidePanel
      size={size}
      setSize={setSize}
      initialMatrix={initialMatrix}
      matrix={matrix}
      setMatrix={setMatrix}
      setDarkMode={setDarkMode}
      darkMode={darkMode}
    />
  );
}
export default SizeControl;
