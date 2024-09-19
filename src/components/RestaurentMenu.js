import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const resId = useParams();
  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-2 p-2">{name}</h1>
      <h3 className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
