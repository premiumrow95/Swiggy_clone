import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const[btn,setBtn] = useState("login")
  // console.log("header")
  return (
    <div className='header_nuke'>

    <div className='header_container'>
      <div className='header_childs'>
        <div className='header_left_side'>
          <div className='header_left_logo'>
            <img src={require('/images/restaurant.png')} />
            {/* <img src= {LOGO_URL}/> */}
          </div>
          <div className='header_left_text'>
            <p>Ratatouille</p>
          </div>
        </div>
        <div className='header_right_side'>
          <ul className='header_right_ul'>
            <li><Link to="/"><i class="fa-solid fa-carrot" style={{  marginRight: "9px", fontSize: "29px"  }}></i>Home</Link></li>
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

export default Header