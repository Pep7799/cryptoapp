import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidenav from './components/Sidenav/Sidenav'

function App() {
  
  const [data, setData] = useState(null)

  useEffect (() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then ((response) => {
        setData(response.data)
        console.log(response.data)

    })
    .catch (error => {
      console.log(error)
    })
  }, [])
 
     if(!data) return null 
      
  return (
    <div className="App">
      <Sidenav data = {data}/>
     
    
      
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
