import React from "react";
import "./InputItemCard.scss";
import "../FridgeMain/Fridge.scss";
import ItemInput from "../ItemInput/ItemInput";
import AddButton from "../AddButton/AddButton";
import Warning from "../../Assets/Warning.svg";
import DatePicker from "../DatePicker/DatePicker";
import Context from "../../ContextApi/Context";

const InputItemCard = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="center-align">
          <div className="input-box">
            <div className="input-row">
              <ItemInput title="Item Name" />
              <div>
                <ItemInput title="Expiry Date" />

                {context.viewCalendar?<DatePicker /> :'' }
                
              </div>

              <div className="btn-position">
                <AddButton />
              </div>
            </div>
            <div className="msg">
              <img
                src={Warning}
                style={{ height: "11px", marginRight: "4px", marginTop: "2px" }}
              />
              We don't want more than one piece of the same food in our fridge.
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default InputItemCard;
