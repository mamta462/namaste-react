import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();
    const handleRemoveItem =()=>{
        dispatch(clearCart())
    }
    return (<div className="text-center  p-2 w-6/12 m-auto"> 
       <h2 className="font-bold text-2xl"> cart</h2>
      {cartItems.length !=0 && <button onClick={handleRemoveItem} className="bg-black text-white p-2 m-2 rounded-lg">Clear cart</button>}
      {cartItems.length ==0 && <h1>Cart is empty.Please add itmes in the cart</h1>}
       <div>
        <ItemList  item ={cartItems}/>
       </div>
    </div>);
}

export default Cart;