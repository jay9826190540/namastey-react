import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    let resData = await fetch(swiggy_menu_api_URL + resId);
    let resDataJson = await resData.json();
    setResInfo(resDataJson);
  }
  if (resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards);
  return resInfo == null ? (<Shimmer />) : (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(',')}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu ---</h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item.card.info.name}>{item.card.info.name} {" "}
                Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default RestaurantDetails;