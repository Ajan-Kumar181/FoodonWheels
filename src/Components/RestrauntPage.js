import { useParams } from "react-router-dom";
import useRestMenu from "../Utils/useRestMenu";
import MenuCategory from "./MenuCategory";

function RestrauntPage() {
    const { restId } = useParams();
    const [restInfo , items] = useRestMenu(restId);
    return (
    <>
        <div className="w-6/12 mx-auto my-6 flex flex-col justify-center items-center">
            <p className="font-bold text-lg">{restInfo.name}</p>
            <p className="font-bold text-lg">{restInfo?.cuisines?.join(', ')} - {restInfo.costForTwoMessage}</p>
        </div>
        <div>
            {items.map((item) => 
            {
                return (
                <div key ={item.card.card.categoryId}>
                    <MenuCategory category = {item.card.card}/>
                </div>
            )})}
        </div>
    </>
    );
}

export default RestrauntPage;
