import React, { useState } from "react";
import ItemCard from "./ItemCard";
const MenuCard = ({ categoryData, showItems, showIndex, setShowIndex, index }) => {
  const handleClick = () => {
    if (showIndex == index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <div className="m-3 bg-gray-50 shadow-lg">
      <div
        className=" p-4 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {categoryData.title} ({categoryData.itemCards.length})
        </span>
        <span> 🔽</span>
      </div>
      {showItems && <ItemCard items={categoryData.itemCards} />}
    </div>
  );
};

export default MenuCard;
