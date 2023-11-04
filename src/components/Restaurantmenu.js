import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();

  if (resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((res) => {
    return res?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  console.log(categories);

  return (
    <>
      <div className="menu pl-10 pt-5 text-center">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <h3 className="text-gray-400 font-semibold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</h3>

        {categories.map((category) => {
          return (
            <RestaurantCategory category={category}></RestaurantCategory>
          )
        })}

      </div >
    </>
  )
}
export default RestaurantDetails;