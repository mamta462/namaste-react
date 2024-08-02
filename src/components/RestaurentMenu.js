import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
const resId = useParams();
const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="res--menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((resName) => (
          <li key={resName.card.info.id}>
            {resName.card.info.name} - {resName.card.info.price / 100} Rs.{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
