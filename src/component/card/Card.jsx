import React from 'react'
import "./card.css"

const Card = (props) => {
    const {emoji, headding, desc } = props
  return (
    <div className='card'>
        <img src={emoji} alt="/" />
        <span>{headding}</span>
        <span>{desc}</span>
        <button className='c__btn'>Detail</button>
    </div>
  )
}

export default Card