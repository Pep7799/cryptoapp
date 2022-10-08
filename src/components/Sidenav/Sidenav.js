import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sidenav.css'
import Home from '../../Images/Home.png'
import Swap from '../../Images/Swap.png'
import Vector from '../../Images/Vector.png'
import Coinslist from '../CoinsList/Coinslist'





const Sidenav = (props) => {

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

      <div className='market-updates'>
        <h4>Market updates</h4>
      </div>

        <div className='cointainer'>
          <div>
            <div className='heading-row'>
              <h2>No</h2>
              <h2>Coin</h2>
              <h2>Last price</h2>
              <h2 className='mobile-version'>Change</h2>
            {/* <h2 className='mobile-version'>Market stats</h2> */}       
            </div>
          </div>           
        </div>
        <div>
          {props.data.map ((data) => {
            return (
            <Coinslist data = {data}/>
            )
          })}
        </div>
    </div>
    </section>
  )
}

export default Sidenav