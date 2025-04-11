import { useParams } from "react-router-dom";
import useRestMenu from "../Utils/useRestMenu";
import MenuCategory from "./MenuCategory";
import { useState , useEffect } from "react";

function RestrauntPage() {
    const { restId } = useParams();
    const [restInfo , items] = useRestMenu(restId);
    const [showCatList , setshowCatList] = useState(null);
    return (
    <>
        <div className="w-6/12 mx-auto my-6 flex flex-col justify-center items-center">
            <p className="font-bold text-lg">{restInfo.name}</p>
            <p className="font-bold text-lg">{restInfo?.cuisines?.join(', ')} - {restInfo.costForTwoMessage}</p>
        </div>
        <div>
            {items.map((item,index) => 
            {
                return (
                <div key ={item.card.card.categoryId}>
                    <MenuCategory category = {item.card.card} showCatList = {index === showCatList && true} CatList = {(input)=> input > 0 ? setshowCatList(index) : setshowCatList(null)} />
                </div>
            )})}
        </div>
    </>
    );
}

export default RestrauntPage;
