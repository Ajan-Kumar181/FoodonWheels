import { Link } from "react-router-dom";
import { SWIGGY_IMG_URL } from "../Utils/Constants";
import { StarCircle,CircleFill} from "../Utils/Icons";

const CradLayout = ({restraunt}) =>{
    return(
        <Link to={'/restraunt/'+ restraunt.info.id} className='w-[240px] p-2 bg-gray-100 rounded-lg hover:shadow-lg'>
            <div className="relative">
            <img className="w-[240px] h-40 rounded-lg inset-shadow-sm inset-shadow-black" src={SWIGGY_IMG_URL + restraunt.info.cloudinaryImageId}/>
            <div className="absolute top-1 right-1 ">
                <CircleFill color ={ restraunt.info.isOpen ? '#1ec31e' :'red'}/>
            </div>
            <div className="absolute bottom-0 right-0 left-0 bg-gray-950 opacity-90 h-10 rounded-lg mask-t-from-10% mask-t-to-100% "></div>
            <p className="absolute bottom-0 left-0 text-white p-2 font-bold font-stretch-50% text-lg">{restraunt.info.costForTwo}</p>
            </div>
            <div className="p-2 ">
            <p className="text-mb font-bold min-h-[3rem] line-clamp-2 font-stretch-50%">{restraunt.info.name}</p>
            <div className="flex items-center">
                <StarCircle color = "green"/>
                <p className="font-medium px-1">{restraunt.info.avgRating} &#x2022; {restraunt.info.sla.slaString}</p>
            </div>
            <div className="font-semibold text-mb text-gray-500">
            <div className="w-full truncate whitespace-nowrap overflow-hidden">
                {restraunt.info.cuisines.join(', ')}
            </div>
            <p>{restraunt.info.locality}</p>
            </div>
            </div>
        </Link>
    )
}
export default CradLayout

export const PromotedCard = (CradLayout)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black color text-white p-2 m-2 rounded-lg z-10">Promoted</label>
                <CradLayout {...props}/>
            </div>
        )
    }
}