import { useState, useEffect } from "react";
import RestaurantCard from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constant';
import { restaurantList } from '../utils/constant';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant,] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log("useEffect called");
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
  return filteredRestaurant.length === 0 ? (<Shimmer />) : (<div className="body">
    <div className="filter-search">
      <input type="text" className="input-search" value={searchText} onChange={handleChangeInput}></input>
      <button className="filter-button" onClick={handleSearchClick}>
        Search
      </button>
      <button className="filter-button" onClick={hanldeClickRestaurant}>
        Top Rated Restaurant
      </button>
    </div>
    <div className="res-container">
      {filteredRestaurant.map((restaurant) => {
        return (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} key={restaurant.info.id} >
            </RestaurantCard>
          </Link>
        )
      })}
    </div>
  </div >)

}
export default Body;