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
  const [itemCount, setItemCount] =useState(0);
  let itemResponse;

  useEffect(() => {
    getAllItems();
  }, []);

  const getDate = (date) => {
    setDate(format(date, "yyyy/MM/dd"));
  };

  const addItem = async () => {
    if (date === "" || itemName === "") {
      alert("Fill all fields");
      return;
    }

    setIsloaded(false);


    let data = {
      title: itemName,
      expiry: date,
    };

    itemResponse = await axios.post(
      "https://thefridge-api.karapincha.io/fridge",
      data
    );

    setDate("");
    setItemName("");

    getAllItems();
  };

  const getAllItems = async () => {


    let response = await axios.get(
      "https://thefridge-api.karapincha.io/fridge"
    );

    setAllItems(response.data);
    setItemCount(response.data.length);
    setIsloaded(true);

    console.log(itemCount)

  };

  const calcExpirationDuration =(date)=>{
    let expDate = new Date(date);
    

    let today = new Date();

    let duration = parseInt((expDate - today) / (1000 * 60 * 60 * 24), 10)

    return duration;

  }

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
        setItemCount
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppProvider;
