
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RestaurentCategory = ({data,showIndex,setShowIndex})=>{
    const handleClick = () =>{
        setShowIndex();
    }
    return (<div>
        {/* {header} */}
     <div className="w-6/12 mx-auto bg-gray-100 shadow-lg my-4 p-4 ">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>⬇
        </span>
        </div>
         {showIndex && <ItemList item = {data?.itemCards}/>}
     </div>
    
    
        {/* {accordian body} */}
    </div>)
} 

export default RestaurentCategory;