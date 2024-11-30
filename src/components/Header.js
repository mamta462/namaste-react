import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInuser} = useContext(UserContext);
 const cartItem = useSelector((store)=>store.cart.items);
 console.log(cartItem);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="m-2 w-24">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="mx-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="mx-2" >
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="mx-2 font-bold"><Link to="/Cart">Cart - ({cartItem.length} items)</Link></li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="mx-2">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
