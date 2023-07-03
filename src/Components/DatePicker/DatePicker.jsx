import React, { useState } from "react";
import "../DatePicker/DatePicker.scss";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Context from "../../ContextApi/Context";

const DatePicker = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div
          className="date-container"
          onFocus={() => {
            context.setViewCalendar(true);
          }}
        >
          {/* Close button for date picker */}
          <div
            onClick={() => {
              context.setViewCalendar(false);
            }}
            className="close-btn"
          >
            <div className="close">x</div>
          </div>
          {/* Date picker */}
          <DayPicker
            mode="single"
            selected={context.date}
            onSelect={context.getDate}
            Focus={() => {
              context.setViewCalendar(true);
            }}
          />
        </div>
      )}
    </Context.Consumer>
  );
};

export default DatePicker;
