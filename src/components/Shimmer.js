import React from 'react'
import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import resList from '../utils/mockData';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

function Shimmer() {
  return (
    <div className='shimmer'>
       <div className='shimmer_nuke'>
      <div className='shimmer_body_container'>
        <div className='Searchbar_filter_buttons'>
          <div className="search_container">
            <input type="text" className="search_bar" placeholder="Search..." />
            <button className="search_button">Search</button>
          </div>
          <div className='button_container'>
          <button>Filter
          </button>
          </div>
        </div>
        <div className='body_restaurant'>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shimmer