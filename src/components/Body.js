import RestorentContainer, {RestaurentContainerPromoted} from "./RestorentContainer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurent, setRestaurentData] = useState([]);
  const [filterdListOfRestaurent, setFilteredRestaurent] = useState([]);
 const [searchText,setSearchText]= useState([]);
 const onlineStatus =useOnlineStatus();
 const RestorentCardPromoted = RestaurentContainerPromoted(RestorentContainer);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.8829177&lng=74.6229699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurentData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json)
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };


if(onlineStatus === false){
  return (<h1>Looks like you're offline.Please check your interenet connection.</h1>)
}
  
  //conditional rendering
  if (ListOfRestaurent?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="m-4 p-4 bg-slate-100">
        <input type="text" className=" p-2 border-2" name="search" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button className="bg-green-300 mx-4 p-2 rounded-lg" onClick={()=>{
        const filteredRestro = ListOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText?.toLowerCase()));
          setFilteredRestaurent(filteredRestro);
      }}>search</button>
      
      
      <button
        className="bg-green-300 mx-4 p-2 rounded-lg"
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
      <div className="flex flex-wrap">
        {filterdListOfRestaurent.map((restaurent) => (
         <Link key={restaurent.info.id} to={"/resInfo/"+restaurent.info.id}> 
         
         {restaurent.info.veg ? <RestorentCardPromoted resData={restaurent} /> :<RestorentContainer  resData={restaurent} />}
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
