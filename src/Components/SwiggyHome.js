import { useEffect, useState } from "react";
import { SWIGGY_DATA_URL } from "../Utils/Constants";
import Axios from 'axios'
import SwiggyHomeShimer from "./SwiggyHomeShimer";
import CradLayout,{PromotedCard} from "./RestCard";

export const SwiggyHome = () =>{
    const [resList , setResList] = useState([]);
    const [search , setSerarch] = useState('');
    const [filteredrest , setFilteredRest] = useState([]);
    const PromotedCardComp= PromotedCard(CradLayout);
    useEffect(() => {
        fetchdata();
    },[])
    const searchFunction = ()=>{
        setFilteredRest(resList.filter((rest) => rest.info.name.toLowerCase().includes(search.toLowerCase())));
    }
    const TopRatedrest = () =>{
        setFilteredRest(filteredrest.filter((res)=> res.info.avgRating >4.3 ));
    }
    async function fetchdata() {
        let resdata = await Axios.get(SWIGGY_DATA_URL);
        setResList(resdata.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRest(resdata.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    return  resList.length === 0 ? <SwiggyHomeShimer/>: (
        <>
        <div className="flex gap-3.5 justify-center mb-2.5">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="search restraunt"
                    className=" block min-w-xl grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    value ={search} onChange={(e) => {setSerarch(e.target.value)}} onKeyDown={(e) =>{e.code === "Enter" && searchFunction()}}
                />
                </div>
                <button onClick={searchFunction} className="bg-blue-200 px-2.5 rounded-lg py-0.5 hover:cursor-pointer">Search</button>
                <button onClick={TopRatedrest} className="bg-blue-200 px-2.5 rounded-lg py-0.5 hover:cursor-pointer">Top Rated</button>
        </div>
        <div className='flex flex-wrap gap-2.5'>
            {filteredrest.map(rest =>{
                return (rest.info.avgRating > 7) ? <PromotedCardComp key ={rest.info.id} restraunt = {rest}/> : <CradLayout key ={rest.info.id} restraunt = {rest} />
            })
        }
        </div>
        </>
    )
}
