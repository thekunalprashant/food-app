
import { CDN_URL } from "../utils/constants";
const ResCard=(props)=>{
    const {info}=props.resData;

    return(
        <div className="m-4 p-2 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img className="aspect-[16/11] rounded-lg" src={CDN_URL+info.cloudinaryImageId} alt="burger" />
            <h3 className="py-1 font-bold">{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating} stars</h4>
            <h4>{info.costForTwo}</h4>
            <h4>{info.sla.deliveryTime} Mins</h4>
        </div>
    )
}
export default ResCard;