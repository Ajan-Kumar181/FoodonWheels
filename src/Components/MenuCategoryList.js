
import { SWIGGY_IMG_URL } from "../Utils/Constants";
import { CircleFill ,StarFill} from "../Utils/Icons";

function MenuCategoryList({itemCards}) {
    return (
        <div className="w-6/12 m-auto">
            {itemCards.map((item) =>{
                return (
                    <div key = {item.card.info.id} className="w-full p-4 my-2 m-auto border-b-2 border-gray-300 flex justify-between gap-2">
                        <div className="flex-col">
                            <div className="flex items-center">
                            <CircleFill color ={item.card.info.itemAttribute.vegClassifier === 'NONVEG' ? 'red' :'#1ec31e'}/>
                            <span className="text-[10px] font-medium">{item.card.info.itemAttribute.vegClassifier}</span>
                            </div>
                            <div className="font-medium text-lg font-stretch-50% ">{item.card.info.name}</div>
                            {item.card.info.ratings.aggregatedRating.rating && <div className="flex items-center">
                                <StarFill color = {item.card.info.ratings.aggregatedRating.rating >3.4 ? item.card.info.ratings.aggregatedRating.rating >4 ? '#008000' :'#1ec31e' : item.card.info.ratings.aggregatedRating.rating >1.5 ? '#ffa500' : '#ff0000'}/>
                                <span className="text-[14px] font-medium" style={{color : item.card.info.ratings.aggregatedRating.rating >3.4 ? item.card.info.ratings.aggregatedRating.rating >4 ? '#008000' :'#1ec31e' : item.card.info.ratings.aggregatedRating.rating >1.5 ? '#ffa500' : '#ff0000'}}>{item.card.info.ratings.aggregatedRating.rating}<span className="font-med4 text-gray-600">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span></span>
                            </div>}
                            <div className="font-medium">&#x20b9;{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</div>
                            <div className="font-light text-sm mt-1.5">{item.card.info.description}</div>
                        </div>
                            <img src={SWIGGY_IMG_URL+item.card.info.imageId} className="w-40 h-30 rounded-lg" />
                    </div>
                )
            })}
        </div>
    );
}

export default MenuCategoryList;