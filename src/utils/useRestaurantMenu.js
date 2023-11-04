import { swiggy_menu_api_URL } from "./constant";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    let resData = await fetch(swiggy_menu_api_URL + resId);
    let resDataJson = await resData.json();
    console.log(resDataJson);
    setResInfo(resDataJson);
  }
  return resInfo;
}
export default useRestaurantMenu;