import React from 'react'
import Toggle from '../toggle/Toggle'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav__wrapper'>
        <div className='nav__left'>
            <div className='nav__name'>Hợp trần</div>
            <Toggle />
        </div>
        <div className='nav__right'>
            <div className='nav__list'>
                <ul>
                    <li>Home</li>
                    <li>services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='btn nav__btn'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar