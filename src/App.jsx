import React, { useState } from "react";
import Diagram from "./Components/Diagram/Diagram.jsx";
import DiagramControl from "./Components/DiagramControl/DiagramControl";

const mok = [
  { id: "1", color: "#56A8BD", quantity: 34 },
  { id: "2", color: "#A65EC5", quantity: 26 },
  { id: "3", color: "#CC7B66", quantity: 70 },
  { id: "4", color: "#8DD36F", quantity: 7 },
];

//Model
class InputValue {
  constructor() {
    this.id = Date.now().toString();
    this.color = "#000000";
    this.quantity = 0;
  }
}

export default function App() {
  const [inputs, setInputs] = useState(mok);

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
