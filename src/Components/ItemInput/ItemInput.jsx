import React from "react";
import "../ItemInput/ItemInput.scss";
import Watermelon from "../../Assets/Watermelon.svg";
import Clock from "../../Assets/AlarmClock.svg";
import Context from "../../ContextApi/Context";

//input component for input form
const ItemInput = (props) => {
  return (
    <Context.Consumer>
      {(context) => (
        <div>
          <div style={{ display: "flex" }}>
            {props.title === "Item Name" ? (
              <img src={Watermelon} className="icon-style" />
            ) : (
              <img src={Clock} className="icon-style" />
            )}

{/* display title from props */}
            <div className="input-heading"> {props.title}</div>
          </div>
          {/* check for prop title name value and  rendering relevant input*/}
          {props.title === "Item Name" ? (
            <input
              className="item-input"
              value={context.itemName}
              onChange={(e) => {
                context.setItemName(e.target.value);
              }}
            />
          ) : (
            <input
              className="item-input"
              value={context.date}
              readOnly
              onFocus={() => {
                context.setViewCalendar(true);
              }}
            
            />
          )}
        </div>
      )}
    </Context.Consumer>
  );
};

export default ItemInput;
