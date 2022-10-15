import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "./components/Sidenav/Sidenav";

function App() {
  // useEffect (() => {
  //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=5&page=1&sparkline=false")
  //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  //   .then ((response) => {
  //       setData(response.data)

  //   })
  //   .catch (error => {
  //     console.log(error)
  //   })
  // }, [])

  //    if(!data) return null

  // useEffect (() => {
  //   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  //   .then ((response) => {
  //       setData(response.data)
  //       console.log(response.data)

  //   })
  //   .catch (error => {
  //     console.log(error)

  const [dollar, setDollar] = useState([]);
  const [naira, setNaira] = useState([]);

  const fetchData = () => {
    const dollarAPI =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const nairaAPI =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=5&page=1&sparkline=false";

    const getDollar = axios.get(dollarAPI);
    const getNaira = axios.get(nairaAPI);

    axios
      .all([getDollar, getNaira])
      .then(
        axios.spread((...allData) => {
          const responseOne = allData[0];
          const responseTwo = allData[1];
          // use/access the results
          setDollar(responseOne.data);
          setNaira(responseTwo.data);
          console.log(responseOne.data);
          console.log(responseTwo.data);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.log(errors);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Sidenav dollar={dollar} naira={naira} />

      {/*  <p>${dollar[0].current_price}</p>
       <p>#{coins[0].current_price}</p> */}
      {/*  <div>
           <img src = {data[0].image} alt = 'coin'/>
            <h2>{data[0].name}</h2>              
            <h2>₦{data[0].current_price}</h2>
        </div>
        */}
    </div>
  );
}

export default App;
