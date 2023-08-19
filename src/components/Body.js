import dataList from "../utils/mockData";
import ResCard from "./ResCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import PromotedCard from "./PromotedCard";
import UserContext from "../utils/userContext";

const Body = () => {
  const [resList, setResList] = useState(dataList);
  const [filteredList, setFilteredList] = useState(dataList);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const ResPromotedCard = PromotedCard(ResCard);
  const {setUserName, loggedInUser} = useContext(UserContext);
  const TopList = () => {
    setFilteredList(resList.filter((res) => res.info.avgRating > 4));
  };
  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.4910988&lng=86.6888051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (!onlineStatus)
    return <h1>Looks like you're Offline!! Check your Interner!</h1>;
  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="m-4 p-4 ">
          <button
            className=" rounded-lg px-4 py-2 bg-green-300"
            onClick={TopList}
          >
            Top Rated Restaurant
          </button>
          <label className="mx-2">UserName: </label>
          <input type="text" className="px-1 py-2 border"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
        <div className="m-4 p-4 w-2/4 flex justify-end">
          <input
            type="text"
            className="box-border w-3/4 rounded-l-lg px-4 py-2 border border-solid border-black "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" rounded-r-lg px-4 py-2 mx-2 bg-green-300 "
            onClick={() => {
              const filtered = resList?.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-4">
        {filteredList?.map((resData) => (
          <Link
            className="  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-100"
            key={resData.info.id}
            to={`/restaurant/${resData.info.id}`}
          >
            {resData.info.promoted ? (
              <ResPromotedCard resData={resData} res={"gi"} />
            ) : (
              <ResCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
