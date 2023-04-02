import React from "react";
import Diagram from "./Components/Diagram/Diagram.jsx";

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
      <Diagram />
    </div>
  );
}
