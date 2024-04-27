import { Link, useLoaderData } from "react-router-dom";

const CountrySpots = () => {

    const {touristSpotData, countryData} = useLoaderData()
    const countryName = countryData.name;

    const filteredTouristSpots = touristSpotData.filter(spot => spot.countryName === countryName);

    return (
        <div className="mt-16 mb-16">
            <h1 className="text-4xl font-bold text-center mb-10">Tourist Spots In <span className="text-orange-500">{countryName}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {
                filteredTouristSpots.map(spot=>
                    <div key={spot._id} className="">
                        <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={spot.photo} className="h-[300px] w-full" alt="" /></figure>
                        <div className="">
                            <h2 className="bg-orange-300 text-center text-2xl font-bold p-2">{spot.touristSpotName}</h2>
                            <div className="p-10 space-y-5 text-xl">
                                <p className="text-center font-semibold text-[16px]">{spot.shortDescription}</p>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <div className="space-y-2 font-semibold">
                                        <p>Country: <span className="text-orange-500">{spot.countryName}</span></p>
                                        <p>Location: <span className="text-orange-500">{spot.location}</span></p>
                                        </div>
                                        <div className="space-y-2 font-semibold ">
                                        <p>Seasonality: <span className="text-orange-500">{spot.seasonality}</span></p>
                                        <p>Average cost: <span className="text-orange-500">${spot.averageCost}</span></p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-center">
                                    <Link to={`../touristSpotDetail/${spot._id}`} className="p-5"><button className="p-5 rounded-xl font-bold bg-orange-400">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default CountrySpots;