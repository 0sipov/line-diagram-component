import React from "react";
import { useRef, useEffect } from "react";
import useDiagram from "./useDiagram.ts";

const Diagram = ({ diagramData }) => {
  const canvas = useRef(null);
  const { setCanvas, diagramInfo } = useDiagram(diagramData);

  useEffect(() => {
    setCanvas(canvas.current);
  }, [setCanvas]);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "12px",
          borderRadius: "5px",
          width: "500px",
        }}
      >
        <canvas
          ref={canvas}
          style={{ display: "block", width: "100%", height: "100%" }}
        ></canvas>
      </div>
      <div>
        {diagramInfo && (
          <ul>
            {diagramInfo?.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    style={{
                      marginRight: "5px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: [item.color],
                    }}
                  ></div>
                  {item.percent} %
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Diagram;
