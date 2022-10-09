import React from 'react'
import './Sidenav.css'
import Home from '../../Images/Home.png'
import Swap from '../../Images/Swap.png'
import Vector from '../../Images/Vector.png'
import Coinslist from '../CoinsList/Coinslist'
import {BiSearch} from 'react-icons/bi'





const Sidenav = ({data}) => {

    const [search, setSearch] = React.useState('')  


  const handleSearch = (e) => {
      setSearch(e.target.value)
  } 
  
  const filteredCoins = data.filter ((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )
 
    

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
      <BiSearch className = 'search-icon'/>
      <input type="text" placeholder = "Search anything" onChange={handleSearch}/>
      
      

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
              <h2 className='coins'>Coins</h2>
              <h2>Last price</h2>
              <h2 className='mobile-version'>Change</h2>
              <h2 className='mobile-version'>Market stats</h2>      
            </div>
          </div>           
        </div>
        <div>
          {filteredCoins.map ((data) => {
            return (
            <Coinslist data = {data} key = {data.id} />
            
            )
            
          })}
          
          
        </div>
        
    </div>
    
    </section>
  )
}

export default Sidenav