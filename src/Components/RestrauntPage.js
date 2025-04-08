import { useEffect, useState } from "react";
import { MENU_URL } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import Axios from "axios";

function RestrauntPage() {
    const [items, SetItems] = useState([]);
    const [restName, setRestname] = useState('');
    const { restId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [restId]); // Add restId as a dependency to fetch the menu when it changes

    const fetchMenu = async () => {
        try {
            const rest_menu = await Axios.get(MENU_URL + restId);
            // Check if the menu data is valid
            if (rest_menu.data && rest_menu.data.data) {
                setRestname(rest_menu.data.data.cards[0].card.card.text); // Get restaurant name

                // Get the list of items (falling back to 'itemCards' if 'carousel' is unavailable)
                SetItems(
                    rest_menu.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel ||
                    rest_menu.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || []
                );
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    return (
        <>
            <h1>{restName}</h1>
            <ul>
                {items?.map((item) => {
                    // Check if item has dish info
                    if (item.dish) {
                        return (
                            <li key={item.dish.info.id}>
                                {item.dish.info.name} -- Rs. {item.dish.info.price / 100}
                            </li>
                        );
                    }
                    // Check if item has card info
                    else if (item.card) {
                        return (
                            <li key={item.card.info.id}>
                                {item.card.info.name} -- Rs.{" "}
                                {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </li>
                        );
                    }
                    return null; // If neither dish nor card is available, render nothing
                })}
            </ul>
        </>
    );
}

export default RestrauntPage;
