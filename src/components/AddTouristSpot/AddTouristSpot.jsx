
const AddTouristSpot = () => {
    return (
        <div className="border border-orange-300 p-20 shadow-2xl mt-14 mb-20 rounded-2xl">
        <h2 className="text-5xl text-center font-bold mb-14 text-orange-500">Add a Tourist Spot</h2>
        <form className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Spot Name" name="touristSpotName" className="input input-bordered w-full" />
                <input type="text" placeholder="Country Name" name="countryName" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Location" name="location" className="input input-bordered w-full" />
                <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Average Cost" name="averageCost" className="input input-bordered w-full" />
                <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Travel Time" name="travelTime" className="input input-bordered w-full" />
                <input type="text" placeholder="Total Visitors Per Year" name="totalVisitorPerYear" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="User Name" name="name" className="input input-bordered w-full" />
                <input type="text" placeholder="User Email" name="email" className="input input-bordered w-full" />
            </div>
            <div className="">
                <input type="text" placeholder="Image URL" name="photo" className="input input-bordered w-full" />
            </div>
            <input type="submit" value="Add" className="btn btn-block text-xl font-extrabold bg-orange-500 border-none"/>
        </form>
    </div>
    );
};

export default AddTouristSpot;