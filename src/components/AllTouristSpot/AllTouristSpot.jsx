import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "../SingleTouristSpot/SingleTouristSpot";

const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData()

    return (
        <div className="mt-16 mb-10">
            <h2 className="text-5xl text-center font-bold mb-14 text-orange-500">All <span className="text-black">Tourist</span> Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allTouristSpot.map(singleTouristSpot=><SingleTouristSpot key={singleTouristSpot._id} singleTouristSpot={singleTouristSpot}></SingleTouristSpot>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;