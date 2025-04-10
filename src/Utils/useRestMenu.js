import { useEffect, useState } from "react";
import { SWIGGY_DATA_URL } from "./Constants";
import { MENU_URL } from "./Constants";
import Axios from 'axios'

const useRestMenu =(id) =>{
        const [items, SetItems] = useState([]);
        const [restInfo,setRestInfo] = useState('');
    useEffect(()=>{
        fetchMenu(id);
    },[])
    const fetchMenu = async (id) => {
        try {
            const rest_menu = await Axios.get(MENU_URL + id);
                setRestInfo(rest_menu.data.data.cards[2].card.card.info);
                SetItems(rest_menu.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card.card.card['@type'] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
            }
            //console.log(s.cards.filter((card) => card.card.card['@type'] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
        catch (error) {
                console.error("Error fetching menu:", error);
            }
    };
    return [restInfo ,items];
}

export default useRestMenu;