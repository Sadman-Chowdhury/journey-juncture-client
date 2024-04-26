import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const TouristSpotDetail = () => {
    const touristSpotDetail = useLoaderData()
    const {touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, photo} = touristSpotDetail


    return (
        <div className="space-y-10 mt-16 mb-16">
            <div className="flex flex-col lg:flex-row gap-10 p-14 rounded-2xl shadow-2xl">
                <div className="w-full lg:w-3/5 rounded-2xl shadow-2xl">
                    <img className="w-full h-full rounded-2xl shadow-2xl" src={photo} alt="" />
                </div>
                <div className="w-full lg:w-2/5 space-y-6 animate__animated animate__fadeInRight animate__delay-1s">
                    <h1 className="text-4xl font-extrabold">{touristSpotName}</h1>
                    <hr className="border-orange-200"/>
                    <p className="text-gray-600">{shortDescription}</p>
                    <hr className="border-orange-200"/>
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <IoLocationSharp className="text-xl text-orange-500" />
                            <h2 className="text-xl">{location}</h2>
                        </div>
                        <p className="text-xl font-bold">Country: <span className="text-orange-500">{countryName}</span></p>

                    </div>
                    <hr className="border-orange-200"/>
                    <p className="text-xl font-bold">Seasonality: <span className="text-orange-500">{seasonality}</span></p>
                    <hr className="border-orange-200"/>
                    <h2 className="text-xl font-bold">Travel time: <span className="text-orange-500"> {travelTime}</span></h2>
                    <hr className="border-orange-200"/>
                    <h2 className="text-xl font-bold">Total visitor per year: <span className="text-orange-500"> {totalVisitorPerYear}</span></h2>
                    <hr className="border-orange-200"/>
                    <div className="">
                        <h1 className="text-2xl font-bold">Average cost: <span className="font-extrabold border border-orange-500 p-2 rounded-xl">{averageCost}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetail;