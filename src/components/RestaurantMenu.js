import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
  const {resId}=useParams()
  const resInfo = useRestaurantMenu(resId);
  if(resInfo===null) return <Shimmer/>
  const{name, cuisines, costForTwoMessage }= resInfo?.cards[0]?.card?.card?.info;
  const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className='flex justify-center'>
      <div className=' w-2/4 bg-green-300 p-4 m-4'>
        <h1 className='font-bold text-center'>{name}</h1>
        <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item)=>
            <li>{item.card.info.name}{" - Rs"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
          )}
          
        </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu