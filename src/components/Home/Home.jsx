import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import './Home.css'

const Home = () => {

    const loadedTouristSpot = useLoaderData()


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
                    loadedTouristSpot.map(touristSpot=><div key={touristSpot._id} style={{ backgroundImage: `url(${touristSpot.photo})` }} className="bg-image h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl flex place-items-end justify-center">
                        <div className= "py-3 w-3/4">
                            <div className="p-2 bg-white rounded-2xl flex justify-between gap-5">
                            <div className="space-y-3">
                                <h1 className="font-bold text-[18px] text-orange-500">{touristSpot.touristSpotName}</h1>
                                <div className="flex text-gray-500">
                                    <IoLocationSharp className="text-2xl"/>
                                    <p className="">{touristSpot.location}</p>
                                </div>
                            </div>
                            <button className="bg-orange-400 font-semibold text-sm px-2 rounded-2xl text-white">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;