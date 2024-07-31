import RestorentContainer from "./RestorentContainer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRestaurent, setRestaurentData] = useState([]);
  const [filterdListOfRestaurent, setFilteredRestaurent] = useState([]);
 const [searchText,setSearchText]= useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.8829177&lng=74.6229699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurentData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //conditional rendering
  if (ListOfRestaurent?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-box">
        <input type="text" name="search" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button onClick={()=>{
        const filteredRestro = ListOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText?.toLowerCase()));
          setFilteredRestaurent(filteredRestro);
      }}>search</button>
      
      
      <button
        className="search"
        onClick={() => {
          const topResList = ListOfRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurent(topResList);
        }}
      >
        Top Restaurent
      </button>
      </div>
      <div className="res-container">
        {filterdListOfRestaurent.map((restaurent) => (
         <Link key={restaurent.info.id} to={"/resInfo/"+restaurent.info.id}> <RestorentContainer  resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
