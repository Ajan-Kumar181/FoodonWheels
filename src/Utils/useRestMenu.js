import { useEffect, useState, useContext } from "react";
import { MENU_URL } from "./Constants";
import Axios from "axios";
import { RestrauntContext } from "../Components/useRestContext";

const useRestMenu = (id) => {
  const [items, setItems] = useState([]);
  const [restInfo, setRestInfo] = useState('');

  useEffect(() => {
    if (id) {
      fetchMenu(id);
    }
  }, [id]);

  const fetchMenu = async (id) => {
    if(id === null){
      return null;
    }
    try {
      const res = await Axios.get(MENU_URL + id);
      const info = res.data.data.cards[2]?.card?.card?.info;
      const menuItems = res.data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setRestInfo(info);
      setItems(menuItems || []);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return [restInfo, items];
};

export default useRestMenu;
