import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidenav from './components/Sidenav/Sidenav'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const api1 = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const api2 = "http://universities.hipolabs.com/search?country=United+States";

    const requestOne = axios.get(api1);
    const requestTwo = axios.get(api2);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      // use/access the results 
      console.log(responseOne.data)
      console.log(responseTwo.data)
    })).catch(errors => {
      // react on errors.
      console.log(errors)
    })

    // axios.get("")
    // setData(response.data)
    //   .then((response) => {
    //     console.log(response.data)

    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }, [])

  if (!data) return null



  return (
    <div className="App">
      <Sidenav data={data} />



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
