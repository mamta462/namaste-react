import { useDispatch } from "react-redux";
import { RES_URL } from "./../utils/constans";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const handleAddItems = (item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {item.map((info) => (
        <div className="flex justify-between">
        <div className="border-b-2 my-2 py-2 text-left  w-9/12">
          <div>
            <span>{info.card.info.name}</span>
            <span>
              ₹-
              {info.card.info.price
                ? info.card.info.price / 100
                : info.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm my-2">{info.card.info.description}</p>
          </div>
        </div>
        <div className=" m-4 p-4 w-3/12">
        <img src={RES_URL + info.card.info.imageId} />
        <div className="relative">
        <button className="bg-black p-2 text-cyan-50 absolute bottom-16 right-2" onClick={()=>handleAddItems(info)}>Add +</button>
        </div>
      </div>
      </div>
      ))}
    </div>
  );
};

export default ItemList;
