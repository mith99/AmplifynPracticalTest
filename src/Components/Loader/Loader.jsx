import React from "react";
import "../Loader/Loader.scss";
import "../FridgeMain/Fridge.scss";

const Loader = () => {
  return (
    <div className="center-align">
          <div className="spinner-container ">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>

    </div>
  );
};

export default Loader;
