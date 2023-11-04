import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constant';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant,] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log('listOfRestaurant', listOfRestaurant);
  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    //console.log("useEffect called");
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // const json = restaurantList;
    // setFilteredRestaurant(json)
    // setListOfRestaurant(json);
  }
  const hanldeClickRestaurant = () => {
    let avg4AboveRating = filteredRestaurant.filter((restaurant) => restaurant.info.avgRating > 4)
    setFilteredRestaurant(avg4AboveRating)
  }
  const handleChangeInput = (event) => {
    setSearchText(event.target.value);
  }
  const handleSearchClick = () => {
    let nameSearchFilter = listOfRestaurant.filter((restaurant) => {
      return (restaurant.info.name.toLowerCase()).includes(searchText)
    })
    setFilteredRestaurant(nameSearchFilter);
  }
  // if (filteredRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline please check internet connection</h1>
  return filteredRestaurant.length === 0 ? (<Shimmer />) : (<div className="body">
    <div className="flex m-4">
      <input type="text" className="border border-solid border-gray-500" value={searchText} onChange={handleChangeInput}></input>
      <button className="px-4 py-2 bg-green-100 mx-4 rounded-lg" onClick={handleSearchClick}>
        Search
      </button>
      <button className="px-4 py-2 bg-gray-100 mx-4 rounded-lg" onClick={hanldeClickRestaurant}>
        Top Rated Restaurant
      </button>
    </div>
    <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurant) => {
        return (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.isOpen ? (<RestaurantWithPromotedLabel resData={restaurant} />) :
              (<RestaurantCard resData={restaurant}  >
              </RestaurantCard>)}

          </Link>
        )
      })}
    </div>
  </div >)

}
export default Body;