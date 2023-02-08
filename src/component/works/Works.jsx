import React from 'react'
import "./works.css"

import upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import shopify from "../../img/Shopify.png"
import face from "../../img/Facebook.png"

const Works = () => {
  return (
    <div className='works'>
      <div className="awesome">
        <span>works for all these</span>
        <span>Brans & clients</span>
        <span>
          Lorem ispum is simplay dummy text of printing of printing lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
          <button className="btn s__btn">Hire me</button>
        <div className="blur s__blur1" style={{ backround: "#ABF1FF94" }}></div>
      </div>
      <div className='w__right'>
          <div className='w__circle'>
              <div className='w__circle__items'>
                  <img src={upwork} alt="/" />
              </div>
              <div className='w__circle__items'>
                  <img src={fiverr} alt="/" />
              </div>
              <div className='w__circle__items'>
                  <img src={amazon} alt="/" />
              </div>
              <div className='w__circle__items'>
                  <img src={shopify} alt="/" />
              </div>
              <div className='w__circle__items'>
                  <img src={face} alt="/" />
              </div>
          </div>
          <div className='w__bg__circle blue__circle'></div>
          <div className='w__bg__circle yellow__circle'></div>
      </div>
    </div>
  );
}

export default Works