import React from "react";
import "./Coinslist.css";

const Coinslist = ({ dollar }) => {
  return (
    <div className="coin-row">
      <p className="coin-number">{dollar.market_cap_rank}</p>

      <div className="coin-description">
        <img src={dollar.image} alt="coins" className="coin-image" />
        <span className="mobile-two">{dollar.name}</span>
        <br />

        <span>{dollar.symbol.toUpperCase()}</span>
      </div>
      <p className="last-price">${dollar.current_price.toLocaleString()}</p>

      {dollar.price_change_percentage_24h < 0 ? (
        <p className="change red  mobile-version">
          {dollar.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="change green  mobile-version">
          {dollar.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}
      <p className="mobile-version">${dollar.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coinslist;
