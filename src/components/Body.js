import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

function Body() {
  const [res,setRes] = useState([]);
  const [filteredRes,setFilteredRes] = useState([]);
  const [searchText,setSearchText] = useState("")

  useEffect(()=>{
    fetchData();
  },[]);

    const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
      setRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json.data)
  };


  // useEffect(()=>{
  //   updateData();
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
  //     // Check if the user has scrolled to the bottom of the page
  //     if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
  //       // Load more data
  //       updateData();
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     // Remove the scroll event listener when the component is unmounted
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // },[handleScroll]);

  // const updateData = async ()=>{
  //   const newData = await fetch("https://www.swiggy.com/dapi/restaurants/list/update",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",

  //     },
  //     body: JSON.stringify(res),
  //   });
  //   const newJson = await newData.json();
  //   setRes(newJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  // }


const onlineStatus = useOnlineStatus();
if(onlineStatus===false){
  return <h1>Looks like you are offline !!!</h1>
}
  


  return res.length === 0 ? <Shimmer/> : (
      <div className='body_container'>
        <div className='Searchbar_filter_buttons'>
          <div className="search_container">
            <input type="text" className="search_bar" placeholder="Search..." value={searchText} onChange={(e)=> setSearchText(e.target.value )}/>
            <button className="search_button" onClick={()=>{
              const filteredRestaurant = res.filter(rest=>rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRes(filteredRestaurant);
            }}>Search</button>
          </div>
          <div className='button_container'>
          <button onClick={()=>{
            const filteredList = res.filter((elem)=> elem.info.avgRating > 4.1)
            setRes(filteredList)}}>Filter
          </button>
          </div>
        </div>
        <div className='body_restaurant'>
          {filteredRes.map((restaurant)=>(
            <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><Restaurant resList={restaurant}/></Link>
          ))}
        </div>
      </div>
  )
}

export default Body