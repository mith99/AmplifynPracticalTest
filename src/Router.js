import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Fridge from "./Components/FridgeMain/Fridge";
import AppProvider from "./ContextApi/AppProvider";

const Router = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Fridge />}></Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default Router;
