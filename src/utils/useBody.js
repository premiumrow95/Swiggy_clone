import { useEffect, useState } from "react";
const useBody = ()=>{
  const [res,setRes] = useState([]);
  const [filteredRes,setFilteredRes] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

    const fetchData = async ()=> {
    const data = await fetch();
    const json = await data.json();
    setRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(json)
  };

}

export default useBody;