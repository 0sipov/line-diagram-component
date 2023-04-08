import React from "react";

//Utils
const toFindIndexOfElById = (arrayOfElements, idOfElement) => {
  return arrayOfElements.findIndex((el) => {
    return el.id === idOfElement;
  });
};

//Component
const DiagramControl = ({ InputValue, setInputs, inputs }) => {
  const CreateInput = () => {
    setInputs((preInputs) => {
      return [...preInputs, new InputValue()];
    });
  };

  const removeInput = (current) => {
    setInputs((preInputs) => {
      const indexOfDeletedEl = toFindIndexOfElById(
        preInputs,
        current.target.id
      );

      const inputs = [...preInputs];
      inputs.splice(indexOfDeletedEl, 1);
      return inputs;
    });
  };

  const onChangeInput = (current) => {
    setInputs((preInputs) => {
      const indexOfChangedEl = toFindIndexOfElById(
        preInputs,
        current.target.id
      );

      return preInputs.map((el, index) => {
        if (index === indexOfChangedEl) {
          el.quantity = Math.abs(Number(current.target.value));
        }
        return el;
      });
    });
  };

  const onChangeColorInput = (current) => {
    setInputs((preInputs) => {
      const indexOfChangedEl = toFindIndexOfElById(
        preInputs,
        current.target.id
      );

      return preInputs.map((el, index) => {
        if (index === indexOfChangedEl) {
          el.color = current.target.value;
        }
        return el;
      });
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {inputs.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="color"
              id={item.id}
              value={item.color}
              onChange={(e) => onChangeColorInput(e)}
            />
            <input
              type="number"
              id={item.id}
              value={item.quantity}
              onChange={(e) => onChangeInput(e)}
              min={0}
            />
            <button type="button" id={item.id} onClick={(e) => removeInput(e)}>
              Remove string
            </button>
          </div>
        );
      })}
      <button type="button" onClick={CreateInput}>
        Add string
      </button>
    </div>
  );
};

export default DiagramControl;
