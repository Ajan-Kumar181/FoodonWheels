import { useParams ,useNavigate} from "react-router-dom";
import useRestMenu from "../Utils/useRestMenu";
import MenuCategory from "./MenuCategory";
import { useState , useContext } from "react";
import { SWIGGY_IMG_URL } from "../Utils/Constants";
import { StarCircle } from "../Utils/Icons";
function RestrauntPage() {
    const { restId } = useParams();
    const [restInfo , items] = useRestMenu(restId);
    const [showCatList , setshowCatList] = useState(null);
    const navigate = useNavigate();

    return (
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
                    <button className=" mr-4 bg-green-500 px-4 py-2 rounded-lg hover:cursor-pointer text-white font-medium" onClick={()=>{navigate('/cart')}}>Go to cart</button>
                  </div>
              </div>
        <div>
            {items.map((item,index) => 
            {
                return (
                <div key ={item.card.card.categoryId}>
                    <MenuCategory restid = {restId} category = {item.card.card} showCatList = {index === showCatList && true} CatList = {(input)=> input > 0 ? setshowCatList(index) : setshowCatList(null)} />
                </div>
            )})}
        </div>
    </>
    );
}

export default RestrauntPage;