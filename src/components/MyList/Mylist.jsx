import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Mylist = () => {
    const {user} = useContext(AuthContext)
    const userAddedSpot = useLoaderData()
    const loggedInUserEmail = user.email;

    const filteredAddSpot = userAddedSpot.filter(item => item.email === loggedInUserEmail);

    // const {_id, touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, photo} = userAddedSpot


    return (
                <div className="mt-20">
                    <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">My <span className="text-black">List</span></h1>
                    <div className="overflow-x-auto border border-orange-300 rounded-2xl p-1 md:p-5 lg:p-10 shadow-2xl">
                    <table className="table text-left lg:text-center w-full lg:w-3/4 mx-auto">
                        {/* head */}
                        <thead>
                        <tr className="text-[18px] md:text-xl lg:text-xl text-orange-500">
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Average Cost</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {filteredAddSpot.map((spot, idx) => (
                        <tr key={idx} className="text-[18px] font-bold mb-5">
                            <td>{spot.touristSpotName}</td>
                            <td>{spot.countryName}</td>
                            <td>{spot.averageCost}</td>
                            <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                            <Link to={`updateTouristSpot/${spot._id}`}><button className="btn bg-orange-400 text-white">Update</button></Link>
                            <Link><button className="btn bg-red-500 text-white">Delete</button></Link>
                            </div>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
    );
};

export default Mylist;