
const Home = () => {
    return (
        <div className="">
            <div className="carousel w-full h-[300px] md:h-[500px] lg:h-[700px] shadow-2xl rounded-2xl mt-10 border">
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
        </div>
    );
};

export default Home;