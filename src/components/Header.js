import { useState } from "react";
import {LOGO_URL} from "../utils/constans";

const Header = () => {
  const [loginBtn,setLoginBtn] =useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="menu-item">
          <ul className="ul-container">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
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