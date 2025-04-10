import { ChevronDown, ChevronUp } from "../Utils/Icons";
import MenuCategoryList from "./MenuCategoryList";
import { Fragment, useState} from 'react';

function MenuCategory({category}) {
    const [showCatList,setShowCatList] = useState(false);
    const showCatListmethod = ()=>{
        setShowCatList(!showCatList);
    }
    return ( 
        <Fragment>
            <div className="w-6/12 bg-gray-100 flex justify-between p-4 my-2 shadow-md m-auto hover:cursor-pointer" onClick={showCatListmethod} >
                <span className="font-bold text-mb">{category.title}({category.itemCards.length})</span>
                <span>{showCatList ? <ChevronUp/> : <ChevronDown/>}</span>
            </div>
            <div>
                {showCatList && <MenuCategoryList itemCards = {category.itemCards}/>}
            </div>
        </Fragment>
     );
}

export default MenuCategory;