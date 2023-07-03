import React from "react";
import "../AddButton/AddButton.scss";
import "../FridgeMain/Fridge.scss";
import Context from "../../ContextApi/Context";

const AddButton = (props) => {
  return (
    <Context.Consumer>
      {(context) => (
        <div
          className="add-button center-align"
          onClick={() => {
            context.addItem();
            // close date picker onclick if both date and item name is filled
            if (context.date != "" || context.itemName != "") {
              context.setViewCalendar(false);
            }
          }}
        >
          ADD TO FRIDGE
        </div>
      )}
    </Context.Consumer>
  );
};

export default AddButton;
