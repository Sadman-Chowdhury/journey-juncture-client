import { Link, useLoaderData } from "react-router-dom";
import './Home.css'
import TouristSpot from "../TouristSpot/TouristSpot";
import Swal from "sweetalert2";

const Home = () => {

    const {touristSpotData, countryData} = useLoaderData()

    const handleAddCountry = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const shortDescription = form.shortDescription.value;
        const photo = form.photo.value;
        const newCountry = {name, shortDescription, photo}
        console.log(newCountry)

        fetch('http://localhost:3000/country', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCountry)
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
            if(data.insertedId){
                alert('User added successfully')
                form.reset()
                }
            })
    }


    return (
        <div className="">
            {/* Slider */}
            <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[700px] shadow-2xl rounded-2xl mt-10 border">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sJfsM8w/il-vagabiondo-8e-Nt0-CQam-B0-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide2" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/P9dN895/david-kohler-VFRTXGw1-Vj-U-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide3" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/0My11pY/dorian-d1-a-X5-NLr-Kg-RBc-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide4" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/MczywgM/sung-shin-Om-LDGYftu-HY-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide5" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4tBFg5k/farah-almazouni-TZAx-FUp-A6hk-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide6" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/J2K3D0M/wolfgang-hasselmann-Lii1-Qx-QLQeg-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-square text-orange-600 text-2xl">❮</a> 
                <a href="#slide1" className="btn btn-square text-orange-600 text-2xl">❯</a>
                </div>
            </div>
            </div>

            {/* tourist spots */}
            <h1 className="text-5xl font-bold text-orange-500 text-center mt-20 mb-10">Tourist <span className="text-black">Spots</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    touristSpotData.map(touristSpot=><TouristSpot key={touristSpot._id} touristSpot={touristSpot}></TouristSpot>)
                }
            </div>

            {/* Countries */}
            <h2 className="text-5xl text-center font-bold mb-14 text-orange-500 mt-28">Our <span className="text-black">Featured</span> Countries</h2>
            {/* <form onSubmit={handleAddCountry} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" required/>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="User Name" name="name" className="input input-bordered w-full" required/>
            </div>
            <div className="">
                <input type="text" placeholder="Image URL" name="photo" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Add" className="btn btn-block text-xl font-extrabold bg-orange-500 border-none" required/>
        </form> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            countryData.map(country=><div key={country._id}>
                    <Link>
                    <div className="card h-[500px] bg-base-100 shadow-xl">
                    <figure><img className="h-[400px] w-full" src={country.photo} alt=""/></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-3xl text-orange-500">{country.name}</h2>
                        <p>{country.shortDescription}</p>
                    </div>
                    </div>
                    </Link>
                </div>
                )
        }
        </div>
        </div>
    );
};

export default Home;