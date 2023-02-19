import './Card.css'
import './Data/Data.jsx'

import React from 'react'

export default function Card(props) {
  return (
    <div className='card-box'>
      <img src={props.imgsrc} alt="" className='card-image' />
      <div>
        <h3>{props.cityname}</h3>
      </div>
    </div>
  )
}
