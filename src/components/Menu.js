import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = ()=>{

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Shimmer/>;

  const {name,cuisines,avgRating,locality,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
  let itemCards;
  if (resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
    for (let card of resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
      if (card?.card?.card?.itemCards) {
        itemCards = card.card.card.itemCards;
        break;
      }
    }
  }

  // const {itemCards} = resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>{cuisines.join(", ")}</li>
        {/* <li>{avgRating}</li> */}
        <li>{locality}</li>
        {itemCards && itemCards.map((item)=> (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
          ))}
      </ul>
      <img src=""></img>
    </div>
  )
}

export default Menu;