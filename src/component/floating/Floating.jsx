import React from 'react'
import "./floating.css"

const Floating = (props) => {

    const {image, txt1, txt2} = props

  return (
    <div className="floating">
      <img src={image} alt="/" />
      <span>{txt1}<br/>{txt2}</span>
    </div>
  );
}

export default Floating