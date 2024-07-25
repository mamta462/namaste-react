import RestorentContainer from "./RestorentContainer";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [ListOfRestaurent, setRestaurentData] = useState(resList);
  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          console.log("clicked");
          const topResList = ListOfRestaurent.filter((res) => res.rating > 4);
          setRestaurentData(topResList);
        }}
      >
        Top Restaurent
      </button>
      <div className="res-container">
        {ListOfRestaurent.map((restaurent) => (
          <RestorentContainer key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
