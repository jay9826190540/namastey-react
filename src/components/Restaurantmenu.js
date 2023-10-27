import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantDetails = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  console.log('online status is' + onlineStatus);
  if (resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // console.log(itemCards);
  return (
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