import React from "react";
import "../AddButton/AddButton.scss";
import "../FridgeMain/Fridge.scss";
import Context from "../../ContextApi/Context";

const AddButton = (props) => {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="add-button center-align" onClick={()=>{context.addItem()}}>ADD TO FRIDGE</div>
      )}
    </Context.Consumer>
  );
};

export default AddButton;
