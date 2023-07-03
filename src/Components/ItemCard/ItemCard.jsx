import React from "react";
import "../ItemCard/ItemCard.scss";
import Delete from "../../Assets/Delete.svg";
import DeleteExpired from "../../Assets/DeleteExpired.svg";
import "../FridgeMain/Fridge.scss";

const ItemCard = (props) => {
  return (
    <div className="item-card space-between">
      {/* Left section - view name and item expiry date */}
      <div className="left-items space-between vertical-align">
        <div className="item-name">{props.name}</div>
        <div className="expiry-date">Expiry date — {props.date}</div>
      </div>

      {/* right section - view expiration status and delete button */}
      <div className="right-items space-between vertical-align">
     
        {props.expireDuration === 'Expiring soon'? (
          <div className="expiration-status center-align status-expiring">
            Expiring soon
          </div>
        ) : props.expireDuration ==='Healthy' ? (
          <div className="expiration-status center-align status-healthy">
            Healthy
          </div>
        ) : (
          <div className="expiration-status center-align status-expired">
            Expired
          </div>
        )}

        {/* show red delete button for already expired items */}
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
