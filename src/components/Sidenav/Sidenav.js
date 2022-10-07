import React from 'react'
import './Sidenav.css'
import Home from '../../Images/Home.png'
import Swap from '../../Images/Swap.png'
import Vector from '../../Images/Vector.png'

const Sidenav = () => {
  return (
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
  )
}

export default Sidenav