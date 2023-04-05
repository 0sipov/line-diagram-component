import React, { useState } from "react";
import Diagram from "./Components/Diagram/Diagram.jsx";
import DiagramControl from "./Components/DiagramControl/DiagramControl";

// const mok = [
//   { color: "#56A8BD", quantity: 34 },
//   { color: "#A65EC5", quantity: 26 },
//   { color: "#CC7B66", quantity: 70 },
//   { color: "#8DD36F", quantity: 7 },
// ];

//Model
class InputValue {
  constructor() {
    this.id = Date.now().toString();
    this.color = "#000000";
    this.quantity = 0;
  }
}

export default function App() {
  const [inputs, setInputs] = useState([new InputValue()]);

  return (
    <div>
      <Diagram diagramData={inputs} />
      <DiagramControl
        InputValue={InputValue}
        inputs={inputs}
        setInputs={setInputs}
      />
    </div>
  );
}
