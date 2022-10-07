import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidenav from './components/Sidenav/Sidenav'
import Main from './components/Main/Main'

function App() {
   {/*
    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url)
        .then((response) => {
          setData(response.data)
        })
      
        .catch((error) => {
          console.log(error)
        })
      }, [])
      console.log(data)

     if(!data) return null 
      */}
  return (
    <div className="App">
      <Sidenav/>
      <Main/>
      
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
