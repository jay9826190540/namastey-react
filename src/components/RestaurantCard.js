import { IMG_CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#F0F0F0"
}
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo } = resData.info;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="margin-bottom">{deliveryTime}</h4>
      <h4></h4>
    </div>
  )
}
export default RestaurantCard;