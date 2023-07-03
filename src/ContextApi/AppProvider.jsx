import React, { useEffect, useState } from "react";
import Context from "./Context";
import { format } from "date-fns";
import axios from "axios";

const AppProvider = (props) => {
  const [date, setDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [viewCalendar, setViewCalendar] = useState(false);
  const [allItems, setAllItems] = useState();
  const [isLoaded, setIsloaded] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  let itemResponse;

  useEffect(() => {
    getAllItems();
  }, []);

  //getting date and converting to 'yyyy/MM/dd' format
  const getDate = (date) => {
    setDate(format(date, "yyyy/MM/dd"));
  };

  //adding items
  const addItem = async () => {
    //check if date and item name fiels are empty. if empty give error alert
    if (date === "" || itemName === "") {
      alert("Fill all fields");
      return;
    }

    let data = {
      title: itemName,
      expiry: date,
    };

    //await axios post request
    itemResponse = await axios.post(
      "https://thefridge-api.karapincha.io/fridge",
      data
    );

    //setting loaded state to false
    setIsloaded(false);
    setDate("");
    setItemName("");

    //get all items method called to get new items
    getAllItems();
  };

  //get all added items
  const getAllItems = async () => {
    //await get axios request
    let response = await axios.get(
      "https://thefridge-api.karapincha.io/fridge"
    );

    //setting all items
    setAllItems(response.data);

    //getting item count
    setItemCount(response.data.length);

    //setting loaded state to true
    setIsloaded(true);
  };

  //calculating dates - expiration date and current date to determine expiration duration
  const calcExpirationDuration = (date) => {
    let expDate = new Date(date);

    let today = new Date();

    let duration = parseInt((expDate - today) / (1000 * 60 * 60 * 24), 10);

    let status;

    //return status
    {
      /* Conditional - check for expity duration. if duration is less than 1 - expired, less than 31 days and greater than 1 day - expiring soon,
         more than 31 days away - healthy */
    }
    if (duration > 1 && duration < 31) {
      status = "Expiring soon";
    } else if (duration > 31) {
      status = "Healthy";
    } else {
      status = "Expired";
    }

    return status;
  };

  // calcExpirationDuration()

  return (
    <Context.Provider
      value={{
        date,
        setDate,
        itemName,
        setItemName,
        getDate,
        viewCalendar,
        setViewCalendar,
        addItem,
        getAllItems,
        allItems,
        setAllItems,
        calcExpirationDuration,
        isLoaded,
        setIsloaded,
        itemCount,
        setItemCount,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppProvider;
