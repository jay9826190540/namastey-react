import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantCategory = ({ category }) => {
  const [openClose, setOpenClose] = useState(false);
  const handleClickChevron = () => {
    setOpenClose(!openClose);
  }
  return (
    <div key={category.card.card.id}>
      <div className="mx-auto my-4 w-6/12  border-2 bg-gray-200 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClickChevron}>
          <span className="font-bold" >{category.card.card.title} ({category.card.card.itemCards.length})</span>
          <span className="font-bold">🔽</span>
        </div>
        {openClose ? <ItemCategory item={category.card.card.itemCards}></ItemCategory> : ""}

      </div>
    </div >
  )
}
export default RestaurantCategory;

