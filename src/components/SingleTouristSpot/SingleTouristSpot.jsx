import { Link } from "react-router-dom";

const SingleTouristSpot = ({singleTouristSpot}) => {
    const {_id, touristSpotName, averageCost, seasonality, travelTime, totalVisitorPerYear, photo} = singleTouristSpot

    return (
        <div className="">
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={photo} className="h-[300px] w-full" alt="" /></figure>
            <div className="">
                <h2 className="bg-orange-300 text-center text-2xl font-bold p-2">{touristSpotName}</h2>
                <div className="p-3 space-y-5">
                    <div className="flex justify-between font-semibold gap-3">
                    <p>Seasonality: <span className="text-orange-500">{seasonality}</span></p>
                    <p>Travel time: <span className="text-orange-500">{travelTime}</span></p>
                    </div>
                    <div className="flex justify-between font-semibold gap-3">
                    <p>Visitor per year: <span className="text-orange-500">{totalVisitorPerYear}</span></p>
                    <p>Average cost: <span className="text-orange-500">{averageCost}</span></p>
                    </div>
                    <div className="card-actions justify-center">
                    <Link to={`../touristSpotDetail/${_id}`}><button className="btn bg-orange-400">View Details</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleTouristSpot;