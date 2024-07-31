import { useState } from "react";
import {LOGO_URL} from "../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn,setLoginBtn] =useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="menu-item">
          <ul className="ul-container">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
             loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;