import React from "react";
import "./Fridge.scss";
import InputItemCard from "../InputItemCard/InputItemCard";
import Loader from "../Loader/Loader";
import ItemCard from "../ItemCard/ItemCard";
import Context from "../../ContextApi/Context";

const Fridge = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="main-background">
          {/* Top greeting */}
          <div className="greeting-card center-align ">
            <div>
              <div className="greeting-heading">Good Morning, Johny!</div>
              <div className="greeting-subheading">
                It's better to go shopping before this friday
              </div>
            </div>
          </div>

          <div className=" center-align ">
            <div className="container-70">
              {/* Input Items to Fridge */}

              <InputItemCard />

              {!context.isLoaded ? (
                <div className="loader-container">
                  <Loader />
                  <div className="loading-text center-align">
                    Loading fridge items
                  </div>
                </div>
              ) : (
                <div>
                  <div className="item-count">Total Items - {context.itemCount}</div>

                  {context?.allItems?.map((i) => (
                    <ItemCard
                      name={i.title}
                      date={i.expiry}
                      expireDuration={context.calcExpirationDuration(i.expiry)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default Fridge;
