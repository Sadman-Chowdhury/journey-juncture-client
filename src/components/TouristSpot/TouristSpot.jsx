import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const TouristSpot = ({touristSpot}) => {

    const {_id, name, touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, email, photo} = touristSpot
    
    return (
        <div style={{ backgroundImage: `url(${photo})` }} className="bg-image h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl flex place-items-end justify-center">
                        <div className= "py-3 w-3/4">
                            <div className="p-2 bg-white rounded-2xl flex justify-between gap-5">
                            <div className="space-y-3">
                                <h1 className="font-bold text-[18px] text-orange-500">{touristSpotName}</h1>
                                <div className="flex text-gray-500">
                                    <IoLocationSharp className="text-2xl"/>
                                    <p className="">{location}</p>
                                </div>
                            </div>
                            <Link className="bg-orange-400 font-semibold text-sm px-2 flex items-center rounded-2xl text-white" to={`touristSpotDetail/${_id}`}><button className="">View Details</button></Link>
                            </div>
                        </div>
                    </div>
    );
};

export default TouristSpot;