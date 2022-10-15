import React, { useEffect } from "react";
import "./Sidenav.css";
import Home from "../../Images/Home.png";
import Swap from "../../Images/Swap.png";
import Vector from "../../Images/Vector.png";
import Coinslist from "../CoinsList/Coinslist";
import { BiSearch } from "react-icons/bi";
import NewCoins from "../NewCoins/NewCoins.js";

const Sidenav = ({ dollar, naira }) => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = dollar.filter((dollar) =>
    dollar.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredNaira = naira.filter((naira) =>
    naira.name.toLowerCase().includes(search.toLowerCase())
  );

  //    useEffect (() => {
  //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=5&page=1&sparkline=false")

  //   .then ((response) => {
  //       setCoins(coins)
  //       console.log(response.data)

  //   })
  //   .catch ((error) => {
  //     console.log(error)
  //   })
  // }, [])

  return (
    <section className="main-board">
      <div className="sidenav">
        <h2>
          Crypto<span>Update</span>
        </h2>
        <ul className="lists">
          <div className="dashboard-background">
            <li className="each-list dashboard">
              {" "}
              <img
                src={Home}
                alt="homebtn"
                className="icon dashboard-icon"
              />{" "}
              Dashboard
            </li>
          </div>
          <li className="each-list">
            <img src={Swap} alt="exchange" className="icon" /> Exchange
          </li>
          <li className="each-list">
            {" "}
            <img src={Vector} alt="news" className="icon" /> News
          </li>
        </ul>
      </div>

      <div className="main-area">
        <div className="search">
          <BiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search anything"
            onChange={handleSearch}
          />
        </div>

        <div>
          <p>Market trends</p>
          <div className="market-trends">
            {filteredNaira.map((naira) => {
              return <NewCoins key={naira.id} naira={naira} />;
            })}
          </div>
        </div>

        <div className="market-updates">
          <h4>Market updates</h4>
        </div>

        <div className="cointainer">
          <div className="heading-row">
            <h2>No</h2>
            <h2 className="coins">Coins</h2>
            <h2>Last price</h2>
            <h2 className="mobile-version">Change</h2>
            <h2 className="mobile-version">Market stats</h2>
          </div>
        </div>

        <div>
          {filteredCoins.map((dollar) => {
            return <Coinslist dollar={dollar} key={dollar.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
