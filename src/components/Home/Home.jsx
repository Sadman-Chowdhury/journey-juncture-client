import { Link, useLoaderData } from "react-router-dom";
import './Home.css'
import TouristSpot from "../TouristSpot/TouristSpot";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

    const {touristSpotData, countryData} = useLoaderData()

    const handleType = (count) => {
        // access word count number
        console.log(count)}
    
      const handleDone = () => {
        console.log(`Done after loops!`)
      }

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
        <div className="mt-20">
            <h1 className="text-5xl text-orange-500 font-bold text-center">
            <Typewriter
            words={['Explore', 'Europe']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
            </h1>
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
                    touristSpotData.slice(0,6).map(touristSpot=><TouristSpot key={touristSpot._id} touristSpot={touristSpot}></TouristSpot>)
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
                    <Link to={`../countrySpots/${country._id}`}>
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
        {/* Reviews */}
        <h2 className="text-5xl text-center font-bold mb-14 text-orange-500 mt-28">User's <span className="text-black">Review</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            <div className="work-sans border border-orange-200 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Maria_Gonzalez</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: Found JourneyJuncture while planning my Europe trip. Easy to find tours, smooth booking, and great service.</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.8</span>
                    </div>
                </div>
            </div>
            <div className="work-sans border border-orange-200 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Nico_love</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: JourneyJuncture is my go-to for unique tours. Love the off-the-beaten-path options and helpful traveler reviews!</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.5</span>
                    </div>
                </div>
            </div>
            <div className="work-sans border border-orange-200 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Cristiano_messi</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: Been using JourneyJuncture for years. Easy to use, detailed tour descriptions, and endless adventure options.</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.9</span>
                    </div>
                </div>
            </div>
        </div>
        {/* support section */}
        <div className=" mt-36 bg-gray-100 rounded-2xl">
                <div className=" p-16">
                    <h2 className="text-4xl font-bold text-orange-500 text-center mb-4">User Support and Assistance</h2>
                    <p className="text-lg text-gray-800 text-center mb-12">We're here to help you every step of the way. If you have any questions, concerns, or need assistance, don't hesitate to reach out to our dedicated support team. Here's how you can get in touch:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>
                            <h3 className="text-xl font-semibold text-orange-500 mb-2">Contact Us</h3>
                            <p className="text-gray-800">For general inquiries or assistance, you can contact our support team via email at <a className="text-blue-500" href="">support@journeyjuncture.com</a> or by filling out the contact form on our website.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-orange-500 mb-2">FAQs</h3>
                            <p className="text-gray-800">Check out our Frequently Asked Questions (FAQs) for answers to common queries and troubleshooting tips. You might find the solution to your issue right there!</p>
                        </li>
                    </ul>
                </div>
            {/* FAQ */}
                <div className="p-16 rounded-xl">
                <h1 className="text-3xl text-orange-500 font-bold text-center mb-5">FAQs</h1>
                    <div className="border p-5 rounded-2xl bg-white">
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How do I create an account?
                        </div>
                        <div className="collapse-content"> 
                            <p>To create an account, simply click on the 'Register' button at the top right corner of the page. Fill in your details and follow the prompts to complete the registration process.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Can I change my username?
                        </div>
                        <div className="collapse-content"> 
                            <p>Unfortunately, usernames cannot be changed once they've been set. However, you can update your display name, which is visible to other users.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            How do I contact customer support?
                        </div>
                        <div className="collapse-content"> 
                            <p>You can contact our customer support team by emailing support@example.com or by calling our toll-free number at 1-800-123-4567. Our team is available 24/7 to assist you.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How can I stay safe while traveling?
                        </div>
                        <div className="collapse-content"> 
                            <p>Staying safe while traveling involves several precautions, such as researching your destination's safety, avoiding risky areas, securing your belongings, staying vigilant in crowded places, and following local laws and customs. Additionally, it's wise to keep important documents and valuables secure, maintain situational awareness, and have emergency contacts and resources readily available.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            Is my personal information secure on your website?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes, we take the security and privacy of your personal information very seriously. Our website employs industry-standard encryption protocols to protect your data during transmission. We also have strict data protection measures in place to safeguard your information against unauthorized access or misuse. You can trust that your personal information is safe with us.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            Do you have a mobile app available?
                        </div>
                        <div className="collapse-content"> 
                            <p>No. The mobile app is still under development.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;