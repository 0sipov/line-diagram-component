import React, {useEffect} from "react";

//Utils
// const toFindIndexOfElById = (arrayOfElements, idOfElement) => {
//   return arrayOfElements.findIndex((el) => {
//     return el.id === idOfElement;
//   });
// };

//Component
const DiagramControl = ({inputs, setInputs}) => {
  const createItem = () => {
    setInputs([...inputs, {id: String(Date.now()), color: '#000000', quantity: 1}])
  };

  const deleteItem = (id) => {
    setInputs(inputs.filter(item => item.id !== id))

  };

  const onChangeInput = (id, value) => {
    setInputs((inputs) => inputs.map(item => {
      if(item.id === id) {
        // return {...item, quantity: parseInt(value, 10) || 0}
        return {...item, quantity: String(parseInt(value, 10) || 0)}
      }
      return item
    }))
  }

  const blur = (e) => {
    console.log({e})
  }

  const onChangeColorInput = (id, value) => {
    setInputs(inputs.map(item => {
      if(item.id === id) {
        return {...item, color: value}
      }
      return item
    }))
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {inputs.map((item) => {
        return (
          // className dis selection click wright of div and u will get error in console something about multi color cant selection bla bla bla
          // to fix problem with 0 on leading number we need change input to type string or convert value in object to string. U can expiriment with it :)
          <div key={item.id} className="disable-text-selection">
            <input
              type="color"
              id={item.id}
              value={item.color}
              onChange={(e) => onChangeColorInput(e.target.id, e.target.value)}
            />
            <input
              type="number"
              inputMode="numeric"
              id={item.id}
              value={item.quantity}
              onChange={(e) => onChangeInput(e.target.id, e.target.value)}
              onBlur={blur}
              min={1}
            />
            <button type="button" id={item.id} onClick={(e) => deleteItem(e.target.id)}>
              Remove string
            </button>
          </div>
        );
      })}
      <button type="button" onClick={createItem}>
        Add string
      </button>
    </div>
  );
};

export default DiagramControl;
