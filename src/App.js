import React, { lazy,Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import('./components/Grocery'));

const AppLayout = () => {
  const [userName,setUsername] = useState()
  const {loggedInuser} =  useContext(UserContext)
  useEffect(()=>{
 const data = {
  Name:"Mamta Dhakad"
 }
 setUsername(data.Name);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInuser:userName}}>
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
     
      { path: "/", 
        element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:'/Grocery',
        element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/resInfo/:id",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
