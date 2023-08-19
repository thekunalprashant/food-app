import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className=" px-4 ">Onine Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className=" px-4 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" px-4 ">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=" px-4 ">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className=" px-4 ">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className=" px-4 font-bold text-lg">
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>

          <button
            className=" px-4 "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
