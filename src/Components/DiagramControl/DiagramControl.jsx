import React from "react";

//Component
const DiagramControl = ({inputs, dispatch}) => {

  const createItem = () => {
    dispatch({type: 'createItem'})
  }
  const deleteItem = (e) => {
    dispatch({type: 'deleteItem' , payload: {id: e.target.id}})
  }
  const editItemColor = (e) => {
    dispatch({type: 'editItem' , payload: {id: e.target.id, value: {color: e.target.value}} })
  }
  const editItemQuantity = (e) => {
    dispatch({type: 'editItem', payload: {id: e.target.id, value: {quantity: e.target.value}}})
  }
  const onBlurQuantityInput = (e) => {
    if(!e.target.value) {
      deleteItem(e)
    }
  }

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
              onChange={editItemColor}
            />
            <input
              type="number"
              inputMode="numeric"
              id={item.id}
              value={item.quantity}
              onChange={editItemQuantity}
              onBlur={onBlurQuantityInput}
              min={1}
            />
            <button type="button" id={item.id} onClick={deleteItem}>
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
