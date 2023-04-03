import React from "react";
import Diagram from "./Components/Diagram/Diagram.jsx";

const mok = [
  { color: "#56A8BD", quantity: 25 },
  { color: "#A65EC5", quantity: 25 },
  { color: "#CC7B66", quantity: 25 },
  { color: "#8DD36F", quantity: 25 },
];

export default function App() {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "12px",
        borderRadius: "5px",
        width: "500px",
      }}
    >
      <Diagram diagramData={mok} />
    </div>
  );
}
