import { useEffect, useState } from "react";
import { SWIGGY_DATA_URL ,SWIGGY_IMG_URL } from "../Utils/Constants";
import Axios from 'axios'
import './SwiggyHome.css'
import SwiggyHomeShimer from "./SwiggyHomeShimer";
import { Link } from "react-router-dom";

const CradLayout = ({restraunt}) =>{
    return(
        <Link to={'/restraunt/'+ restraunt.info.id} className="res_card">
            <img className="res_image" src={SWIGGY_IMG_URL + restraunt.info.cloudinaryImageId}/>
            <p>{restraunt.info.name}</p>
            <p>{restraunt.info.avgRating} - {restraunt.info.sla.slaString} delivery</p>
            <p>{restraunt.info.costForTwo}</p>
            <p>{restraunt.info.isOpen ? 'open':'closed'}</p>
            <p>{restraunt.info.locality}</p>
        </Link>
    )
}
export const SwiggyHome = () =>{
    const [resList , setResList] = useState([]);
    const [search , setSerarch] = useState('');
    const [filteredrest , setFilteredRest] = useState([]);
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
        <div className="Search_section">
            <input value ={search} onChange={(e) => {setSerarch(e.target.value)}} onKeyDown={(e) =>{e.code === "Enter" && searchFunction()}} ></input>
            <button onClick={searchFunction}>Search</button>
            <button onClick={TopRatedrest}>Top Rated</button>
        </div>
        <div className="Swiggy_card_layout">
            {filteredrest.map(rest => <CradLayout key ={rest.info.id} restraunt = {rest} />)}
        </div>
        </>
    )
}
