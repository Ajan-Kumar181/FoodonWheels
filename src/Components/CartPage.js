import { useSelector } from "react-redux";
import { CircleFill ,DeleteOutline } from "../Utils/Icons";
import { useDispatch } from "react-redux";
import { reduceItemQunatity , increaseItemQunatity ,removeItem , clearCart } from "../Utils/Redux/Cartslice";

const CartPage = ()=>{
    const CartList = useSelector(state => state.cart)
    console.log(CartList);
    const dispatch = useDispatch();
    reduceQuantity =(id)=>{
        dispatch(reduceItemQunatity(id));
    }
    const incQuantity = (id) =>{
        dispatch(increaseItemQunatity(id));
    }
    const removedish =(id)=>{
        dispatch(removeItem(id));
    }
    return<div className="w-6/12 m-auto">
    {CartList.cartItems.map((item) => {
      const info = item.item.card.info;
      const isNonVeg = info.itemAttribute.vegClassifier === "NONVEG";
      const price = (info.price ? info.price : info.defaultPrice) / 100 * item.Quantity;
  
      return (
        <div
          key={info.id}
          className="w-full p-4 my-2 border-b-2 border-gray-300 flex items-center gap-4 bg-gray-100"
        >
          {/* Column 1: Icon + Name */}
          <div className="flex items-center gap-2 flex-1">
            <CircleFill color={isNonVeg ? "red" : "#1ec31e"} />
            <div className="font-medium text-lg">{info.name}</div>
          </div>
  
          {/* Column 2: Price */}
          <div className="font-medium w-24 text-right mr-4">
            ₹{price}
          </div>
  
          {/* Column 3: Quantity Controls + Delete */}
          <div className="flex gap-2 items-center w-32 justify-end">
            <div className="bg-white rounded-lg py-1.5 px-3 drop-shadow-lg text-green-600 font-bold flex justify-around items-center w-24">
              <div
                className="text-lg hover:cursor-pointer"
                onClick={() => reduceQuantity(info.id)}
              >
                -
              </div>
              <div className="text-md">{item.Quantity}</div>
              <div
                className="text-lg hover:cursor-pointer"
                onClick={() => incQuantity(info.id)}
              >
                +
              </div>
            </div>
            <div
              className="bg-white rounded-lg p-2 drop-shadow-lg hover:cursor-pointer"
              onClick={() => removedish(info.id)}
            >
              <DeleteOutline />
            </div>
          </div>
        </div>
      );
    })}
  </div>
  
}

export default CartPage;