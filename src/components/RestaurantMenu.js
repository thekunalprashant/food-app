import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex justify-center">
      <div className=" w-4/6 p-4 m-4">
        <h1 className=" text-center font-bold text-3xl">{name}</h1>
        <h3 className="text-center font-semibold text-lg m-2 text-slate-600">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>

        {categories.map((category, index) => (
          <div key={category?.card?.card.title}>
            <MenuCard
              categoryData={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={setShowIndex}
              showIndex={showIndex}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
