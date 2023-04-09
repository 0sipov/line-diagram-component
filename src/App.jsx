import React, {useReducer} from "react";
import Diagram from "./Components/Diagram/Diagram.jsx";
import DiagramControl from "./Components/DiagramControl/DiagramControl";

const initialState = [
  { id: "1", color: "#56A8BD", quantity: 34 },
  { id: "2", color: "#A65EC5", quantity: 26 },
  { id: "3", color: "#CC7B66", quantity: 70 },
  { id: "4", color: "#8DD36F", quantity: 7 },
];

function reducer(state, action) {
  switch (action.type) {
    case 'createItem':
      return [...state, {id: String(Date.now()), color: '#000000', quantity: 1}]
    case 'deleteItem':
      return state.filter(item => item.id !== action.payload.id)
    case 'editItem':
      return state.map((item) => {
        if(item.id === action.payload.id) {
          return {...item, ...action.payload.value}
        }
        return item
      })
    default:
      throw new Error('need more action type')
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <Diagram diagramData={state} />
      <DiagramControl
        inputs={state}
        dispatch={dispatch}
      />
    </div>
  );
}
