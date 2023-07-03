import React from "react";
import "../ItemCard/ItemCard.scss";
import Delete from "../../Assets/Delete.svg";
import DeleteExpired from "../../Assets/DeleteExpired.svg";
import "../FridgeMain/Fridge.scss";

const ItemCard = (props) => {
  return (
    <div className="item-card space-between">
      <div className="left-items space-between vertical-align">
        <div className="item-name">{props.name}</div>
        <div className="expiry-date">Expiry date — {props.date}</div>
      </div>

      <div className="right-items space-between vertical-align">
        {props.expireDuration > 1 && props.expireDuration < 31 ? (
          <div className="expiration-status center-align status-expiring">
            Expiring soon
          </div>
        ) : props.expireDuration > 31 ? (
          <div className="expiration-status center-align status-healthy">
            Healthy
          </div>
        ) : (
          <div className="expiration-status center-align status-expired">
            Expired
          </div>
        )}

        
        {props.expireDuration < 1 ? (
          <div>
            <img src={DeleteExpired} />
          </div>
        ) : (
          <div>
            <img src={Delete} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
