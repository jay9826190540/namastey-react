import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // if no dependency array use effect is called on every component render
  // if the dependency array is empty then the use effect is called on initial render
  // if the dependecy in array is btnName then use effect is called when dependency btnName changes
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.w3schools.com/images/picture.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          {/* Never use href in react js. It will refresh the whole page */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
          <li>Cart</li>
          <button className="button-header" onClick={() => btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div >
  )
}
export default Header;
