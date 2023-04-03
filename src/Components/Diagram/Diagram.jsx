import React from "react";
import { useRef, useEffect } from "react";
import useDiagram from "./useDiagram.ts";

const Diagram = ({ diagramData }) => {
  const canvas = useRef(null);
  const { setCanvas } = useDiagram(diagramData);

  useEffect(() => {
    setCanvas(canvas.current);
  }, [setCanvas]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvas}
        style={{ display: "block", width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
};

export default Diagram;
