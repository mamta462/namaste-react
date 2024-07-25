import {LOGO_URL} from "../utils/constans";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="menu-item">
          <ul className="ul-container">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;