import { IMG_CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#F0F0F0"
}
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo } = resData.info;

  return (
    <div className="w-[250px] px-4 bg-gray-100 m-1 p-4 rounded-lg border-1 border-current hover:bg-gray-200" >
      <img className="rounded-lg" alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="text-lg font-semibold py-2">{name}</h3>
      <h4 className="break-words">{cuisines.join(',')}</h4>
      <h4 className="italic">{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="margin-bottom">{deliveryTime}</h4>
      <h4></h4>
    </div>
  )
}
/// Higher order component are pure functions
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white mt-2 ml-2 rounded-lg p-1">Promoted</label>
        <RestaurantCard {...props} />
      </>
    )
  }
}
export default RestaurantCard;