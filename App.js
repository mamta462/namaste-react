import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png"/>
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


const RestorentContainer =()=>{
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/smo2yv6budwe0ciye1ry"/>
        <h3>Pizza Box</h3>
        <h4>North inndian,chinese</h4>
        <h4>4.4 stars</h4>
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search"> search</div>
        <div className="res-container">
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
            <RestorentContainer/>
        </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div></div>
    )
};

const AppLayout = () => {
 return( <div className="main-layout">
    <Header />
    <Body />
    <Footer />
  </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
