import React from "react";
import { useRef, useEffect } from "react";
import useDiagram from "./useDiagram.ts";

const mok = [
  { color: "#56A8BD", quantity: 25 },
  { color: "#A65EC5", quantity: 25 },
  { color: "#CC7B66", quantity: 25 },
  { color: "#8DD36F", quantity: 25 },
];

const Diagram = () => {
  const canvas = useRef();
  const { setCanvas } = useDiagram(mok);

  useEffect(() => {
    setCanvas(canvas.current);
  });

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "12px",
        borderRadius: "5px",
      }}
    >
      <canvas
        ref={canvas}
        style={{ display: "block", width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
};

export default Diagram;
