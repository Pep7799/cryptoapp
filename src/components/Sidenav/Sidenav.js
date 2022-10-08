import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sidenav.css'
import Home from '../../Images/Home.png'
import Swap from '../../Images/Swap.png'
import Vector from '../../Images/Vector.png'





const Sidenav = () => {

  const [data, setData] = useState(null)

  useEffect (() => {
    axios.get("https://api.coingecko.com/api/v3/exchange_rates")
    .then ((response) => {
        setData(response.data)
        console.log(response.data)

    })
  })
 
  return (
    <section className='main-board'>
    <div className='sidenav'>
      <h2>Crypto<span>Update</span></h2>
      <ul className='lists'>
        <div className='dashboard-background'>
        <li className='each-list dashboard' > <img src={Home} alt="homebtn" className='icon dashboard-icon'/> Dashboard</li>  
        </div>
        <li className='each-list'><img src={Swap} alt="exchange" className='icon'/> Exchange</li>
        <li className='each-list'> <img src={Vector} alt="news" className='icon'/> News</li>
      </ul>       
    </div>

    <div className='main-area'>
      <input type="text" placeholder = "Search anything" />
      <p>Market trends</p>

      <div>

      </div>

      <div>
        <h4>Market updates</h4>

      </div>
    </div>
    </section>
  )
}

export default Sidenav