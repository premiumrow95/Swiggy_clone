import React from 'react'
import { CDN_URL } from '../utils/constants';
function Restaurant(props) {
  const {resList} = props;
  const {name,id,cloudinaryImageId,Locality,areaName,avgRating,availability,cuisines,sla:{deliveryTime}} = resList?.info
  return (
    <div>
      <div className='restaurant_card'>
        <div className='restaurant_card_image_container'>
          <img src= {`${CDN_URL + cloudinaryImageId}`}/>
        </div>
        <div className='restaurant_card_details_container'>
          <div style={{ fontWeight:"600" }}>Restaurant : {name}</div>
          <div>Locality : {areaName}</div>
          <div>AvgRatings : {avgRating}<i class="fa-solid fa-star" style={{  marginLeft: "9px", fontSize: "16px", color: "#70e000"  }}></i></div>
          <div>Dishes : {cuisines.join(",")}</div>
          <div style={{ fontWeight:"600" }}>DeliveryTime : {deliveryTime}</div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant