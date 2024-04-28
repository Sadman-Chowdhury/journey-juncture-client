import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {

    const touristSpot = useLoaderData()
    const {_id, touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, photo} = touristSpot

    const handleUpdateTouristSpot = event => {
        event.preventDefault()
        const form = event.target
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;
        const photo = form.photo.value;
        const updatedTouristSpot = {touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, photo}
        console.log(updatedTouristSpot)

        fetch(`https://journey-juncture-sadman-chowdhurys-projects.vercel.app/touristSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTouristSpot)
            })
            .then(res=>res.json)
            .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Tourist spot updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            })
    }

    return (
        <div className="border border-orange-300 p-20 shadow-2xl mt-14 mb-20 rounded-2xl">
        <h2 className="text-5xl text-center font-bold mb-14 text-orange-500">Update <span className="text-black">Tourist</span> Spot</h2>
        <form onSubmit={handleUpdateTouristSpot} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10 form-control">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Tourist spot name</span>
                    </label>
                <input defaultValue={touristSpotName} type="text" placeholder="Spot Name" name="touristSpotName" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Country name</span>
                    </label>
                <input defaultValue={countryName} type="text" placeholder="Country Name" name="countryName" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Location</span>
                    </label>
                <input defaultValue={location} type="text" placeholder="Location" name="location" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Short description</span>
                    </label>
                <input defaultValue={shortDescription} type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Average cost</span>
                    </label>
                <input defaultValue={averageCost} type="text" placeholder="Average Cost" name="averageCost" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Seasonality</span>
                    </label>
                <input defaultValue={seasonality} type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Travel time</span>
                    </label>
                <input defaultValue={travelTime} type="text" placeholder="Travel Time" name="travelTime" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Total visitors per year</span>
                    </label>
                <input defaultValue={totalVisitorPerYear} type="text" placeholder="Total Visitors Per Year" name="totalVisitorPerYear" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="form-control w-full">
            <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                <input defaultValue={photo} type="text" placeholder="Image URL" name="photo" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Update" className="btn btn-block text-xl font-extrabold bg-orange-500 border-none" required/>
        </form>
    </div>
    );
};

export default UpdateTouristSpot;