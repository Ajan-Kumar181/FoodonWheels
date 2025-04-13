import { useSelector } from "react-redux";
import { CircleFill ,DeleteOutline } from "../Utils/Icons";
import { useDispatch } from "react-redux";
import { reduceItemQunatity , increaseItemQunatity ,removeItem , clearCart } from "../Utils/Redux/Cartslice";
import { SWIGGY_IMG_URL } from "../Utils/Constants";
import { StarCircle } from "../Utils/Icons";
import useRestMenu from '../Utils/useRestMenu'
import { useNavigate } from "react-router-dom";

const CartPage = ()=>{
    const navigate = useNavigate();
    const CartList = useSelector(state => state.cart);
    const [restInfo] = useRestMenu(CartList.restId);
    if(CartList.cartItems.length === 0){
      return <h1>Cart is Empty</h1>
    }
    console.log(restInfo);
    const dispatch = useDispatch();
    reduceQuantity =(id , price)=>{
        dispatch(reduceItemQunatity({id , price}));
    }
    const incQuantity = (id , price) =>{
        dispatch(increaseItemQunatity(
          {id , price}
        ));
    }
    const removedish =(id , price)=>{
      let totalPrice
      CartList.cartItems.forEach(element => {
        if(element.item.card.info.id === id){
          totalPrice = price * element.Quantity;
        }
      });
        dispatch(removeItem({id , totalPrice}));
    }
    const clearTheCart = () =>{
      if(confirm("Clear Cart!!") === true){
        dispatch(clearCart());
      }
    }
    return(
      <>
      <div className="w-6/12 m-auto h-40 rounded-2xl flex justify-between items-center">
      <img src={SWIGGY_IMG_URL + restInfo.cloudinaryImageId} className="h-40 w-40 rounded-2xl"></img>
        <div className="flex-col gap-4">
        <h1 className="mx-4  text-3xl font-bold ">{restInfo.name}</h1>
        <h1 className="mx-4  font-bold ">{restInfo.locality}</h1>
          <div className="flex items-center mx-4">
              <StarCircle color = "green"/>
              <p className="font-medium px-1">{restInfo.avgRating} Star Rating</p>
          </div>
        </div>
        <div>
          <button className=" mr-4 bg-red-500 px-4 py-2 rounded-lg hover:cursor-pointer text-white font-medium" onClick={clearTheCart}>Clear Cart</button>
        </div>
      </div>
    <div className="w-6/12 m-auto">
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
                onClick={() => reduceQuantity(info.id , (info.price ? info.price : info.defaultPrice))}
              >
                -
              </div>
              <div className="text-md">{item.Quantity}</div>
              <div
                className="text-lg hover:cursor-pointer"
                onClick={() => incQuantity(info.id , (info.price ? info.price : info.defaultPrice))}
              >
                +
              </div>
            </div>
            <div
              className="bg-white rounded-lg p-2 drop-shadow-lg hover:cursor-pointer"
              onClick={() => removedish(info.id , (info.price ? info.price : info.defaultPrice))}
            >
              <DeleteOutline />
            </div>
          </div>
        </div>
      );
    })}
  </div>
  <div className="w-6/12 mx-auto rounded-2xl flex justify-between items-center my-4">
      <h2 className="bg-white rounded-lg px-8 py-1.5 drop-shadow-lg text-green-600 font-bold font-stretch-75% hover:cursor-pointer hover:bg-gray-200" onClick={()=>{navigate(`/restraunt/${restInfo.id}`)}}>add More</h2>
  </div>
  <div className="w-6/12 mx-auto rounded-2xl flex justify-between items-center bg-amber-100">
      <h1 className="m-4">Total Cost : {CartList.cartPrice/100}</h1>
      <h1 className="m-4">GST and charges : {(CartList.cartPrice/100 *7.5)/100}</h1>
  </div>
  </>
  )
}

export default CartPage;