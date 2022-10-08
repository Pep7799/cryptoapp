import React from 'react'
import './Coinslist.css'

const Coinslist = (props) => {
  return (
      <div>
        <p>{props.data.market_cap_rank}</p>
        <div>
            <img src={props.data.image} alt="coins" />
            <p>{props.data.name}</p>
            <p>{props.data.symbol}</p>
        </div>
        <p>{props.data.current_price}</p>
        <p>{props.data.price_change_percentage_24h}</p>

    </div>
  )
}

export default Coinslist