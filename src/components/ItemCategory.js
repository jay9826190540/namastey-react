import { IMG_CDN_URL } from "../utils/constant";

const ItemCategory = ({ item }) => {
  console.log(item);
  return (
    <>
      {item.map((item) => {
        return (
          <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2 m-2">
                <span>{item.card.info.name}</span>
                <span> Rs {item.card.info.price / 100}</span>
              </div>

              <p className="text-xs mb-5 px-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">

              <div className="absolute">
                <button className="px-6 py-2 bg-white shadow-lg rounded-md mx-2 mt-10">Add +</button>
              </div>
              <img src={IMG_CDN_URL + item.card.info.imageId} className="w-full"></img>
            </div >
          </div >
        )
      })}

    </>
  )
}
export default ItemCategory;