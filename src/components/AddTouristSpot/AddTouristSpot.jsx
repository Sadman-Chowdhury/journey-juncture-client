import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddTouristSpot = () => {
    const {user} = useContext(AuthContext)

    const handleAddTouristSpot = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        if (email !== user.email) {
            Swal.fire({
                title: 'Error!',
                text: 'You are email does not match. Enter again',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        const name = form.name.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;
        const photo = form.photo.value;
        const newTouristSpot = {name, touristSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, email, photo}
        console.log(newTouristSpot)

        fetch('https://journey-juncture-sadman-chowdhurys-projects.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
            })
            .then(res=>res.json)
            .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'New Tourist Spot added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            })
    }

    return (
        <div className="border border-orange-300 p-20 shadow-2xl mt-14 mb-20 rounded-2xl">
        <h2 className="text-5xl text-center font-bold mb-14 text-orange-500">Add a Tourist Spot</h2>
        <form onSubmit={handleAddTouristSpot} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Spot Name" name="touristSpotName" className="input input-bordered w-full" required />
                <input type="text" placeholder="Country Name" name="countryName" className="input input-bordered w-full" required/>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Location" name="location" className="input input-bordered w-full" required/>
                <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" required/>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="number" placeholder="Average Cost ($USD)" name="averageCost" className="input input-bordered w-full" required/>
                <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full" required/>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Travel Time" name="travelTime" className="input input-bordered w-full" required/>
                <input type="text" placeholder="Total Visitors Per Year" name="totalVisitorPerYear" className="input input-bordered w-full" required/>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="User Name" name="name" className="input input-bordered w-full" required/>
                <input type="text" placeholder="User Email" name="email" className="input input-bordered w-full" required/>
            </div>
            <div className="">
                <input type="text" placeholder="Image URL" name="photo" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Add" className="btn btn-block text-xl font-extrabold bg-orange-500 border-none" required/>
        </form>
    </div>
    );
};

export default AddTouristSpot;