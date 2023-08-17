import React from "react";
import { CDN_URL } from "../utils/constants";
const ItemCard = ({ items }) => {
  console.log(items);
  return (
    <div className="px-4 bg-white">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 mx-2 border-b-2 flex justify-between"
        >
          <div className="py-2 w-10/12 ">
            <span className="font-semibold">{item.card.info.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs py-2 ">{item.card.info.description}</p>
          </div>
          <div className="relative m-4 w-2/12 flex justify-center">
            <img
              className=" w-full h-24 object-cover drop-shadow-lg rounded-md"
              src={CDN_URL + item.card.info.imageId}
              alt="Api off"
            />
            <button className="absolute bottom-[-12px] px-4 py-1 shadow-lg  bg-green-300 hover:bg-green-500 text-black justify-self-center">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
