import React from "react";
import "./NewCoins.css";

const Coinslist = ({ naira }) => {
  return (
    <div className="coin-rowtwo">
      <div>
        <img src={naira.image} alt="coins" className="coin-imagetwo" />
      </div>
      <div className="coin-descriptiontwo">
        <p className="coin-symbol">{naira.symbol.toUpperCase()}</p>
        <p className="coin-name">{naira.name}</p>
      </div>
      <div>
        <p className="last-pricetwo">₦{naira.current_price.toLocaleString()}</p>
        {naira.price_change_percentage_24h < 0 ? (
          <p className="change red">
            {naira.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="change green">
            {naira.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </div>
    </div>
  );
};

export default Coinslist;
