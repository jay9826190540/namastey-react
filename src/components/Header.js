import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()
  // if no dependency array use effect is called on every component render
  // if the dependency array is empty then the use effect is called on initial render
  // if the dependecy in array is btnName then use effect is called when dependency btnName changes
  return (
    <div className="flex justify-between shadow-md px-10 bg-gray-100 ">
      <div className="logo-container">
        <img className="w-56" src="https://www.w3schools.com/images/picture.jpg" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* Never use href in react js. It will refresh the whole page */}
          <li className="px-4 text-xl">Online Status : {onlineStatus ? "Online" : "Offline"}</li>
          <li className="px-4 text-xl"><Link to="/">Home</Link></li>
          <li className="px-4 text-xl"><Link to="/about">About us</Link></li>
          <li className="px-4 text-xl"><Link to="/contactus">Contact us</Link></li>
          <li className="px-4 text-xl"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 text-xl">Cart</li>
          <li className="button-header px-4 text-xl border-2 bg-gray-200 h-12 pt-2" onClick={() => btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</li>
        </ul>
      </div>
    </div >
  )
}
export default Header;
