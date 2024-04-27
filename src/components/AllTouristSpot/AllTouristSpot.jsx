import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "../SingleTouristSpot/SingleTouristSpot";
import { useState } from "react";


const AllTouristSpot = () => {

    const allTouristSpot = useLoaderData()

    const [sorted, setSorted] = useState([...allTouristSpot]); // State for sorted spots

    const handleSortAverageCost = () => {
        console.log('lol')
        // Create a copy of the original data to avoid mutation
        const sortedSpots = [...allTouristSpot].sort((spot1, spot2) => {
            const cost1 = parseFloat(spot1.averageCost);
            const cost2 = parseFloat(spot2.averageCost);
            console.log(cost1 - cost2)
            return cost1 - cost2;
          });
    
        // Update state to reflect the sorted data
        console.log(sortedSpots)
        setSorted(sortedSpots);
      };
    //   console.log(sorted)

    return (
        <div className="mt-16 mb-10">
            <h2 className="text-5xl text-center font-bold mb-7 text-orange-500">All <span className="text-black">Tourist</span> Spots</h2>
            <div className="flex justify-center mb-10">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-orange-400">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52">
                    <button onClick={handleSortAverageCost}><a className="text-orange-500">Average cost</a></button>
                </ul>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
          sorted.map(singleTouristSpot => (<SingleTouristSpot key={singleTouristSpot._id} singleTouristSpot={singleTouristSpot}/>
          ))
        }
            </div>
        </div>
    );
};

export default AllTouristSpot;