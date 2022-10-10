import React from 'react'
import './Coinslist.css'

const Coinslist = (props) => {


  return (
    <div className='coin-row'>
        <p className='coin-number'>{props.data.market_cap_rank}</p>
        <div className='coin-description'>
            <img src={props.data.image}  alt="coins" className='coin-image'/>            
            <p>{props.data.name}</p>
            <p> | </p>
            <p>{props.data.symbol.toUpperCase()}</p>
        </div>
        <p className='last-price'>${props.data.current_price.toLocaleString()}</p>

        {props.data.price_change_percentage_24h < 0 ? (
             <p className='change red'>{props.data.price_change_percentage_24h.toFixed(2)}%</p>   
        ) : (
            <p className='change green'>{props.data.price_change_percentage_24h.toFixed(2)}%</p>
        )}

       

            

    </div>
  )
}

export default Coinslist