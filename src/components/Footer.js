import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  const[btn,setBtn] = useState("login")
  return (
    <div className='nuke'>
    <div className='footer_container'>
      <div className='footer_childs'>
        <div className='footer_left_side'>
          <div className='footer_left_logo'>
            <img src={require('/images/restaurant.png')} />
            {/* <img src= {LOGO_URL}/> */}
          </div>
          <div className='footer_left_text'>
            <p>Ratatouille</p>
          </div>
        </div>
        <div className='footer_right_side'>
          <ul className='footer_right_ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <button style={{padding: "10px", cursor: "pointer"}} onClick={()=> {
              return btn === "login" ? setBtn("logout") : setBtn("login");
            }}>{btn}</button>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer









