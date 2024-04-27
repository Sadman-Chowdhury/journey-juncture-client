import { IoMdCall } from "react-icons/io";
import { FaFax, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <>
        <footer className="p-10 bg-black text-white flex flex-col gap-10 lg:flex-row justify-between pt-16 mt-40">
        <div className="flex justify-around w-full lg:w-1/2">
            <nav>
            <h1 className="text-orange-500 font-bold text-2xl mb-4">Journey Juncture</h1>
                <h6 className="text-xl font-bold text-orange-500 mb-3">Contact Details</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover flex items-center gap-2"><IoMdCall className="text-[18px]"/>Mobile: 000002223</a>
                    <a className="link link-hover flex items-center gap-2"><FaFax className="text-[18px]"/>Fax: 002222999</a>
                    <a className="link link-hover flex items-center gap-2"><AiOutlineMail className="text-[18px]"/>Mail: journey.juncture@gmail.com</a>
                </div>
            </nav> 
            <nav className="mt-12">
                <h6 className="text-xl font-bold text-orange-500 mb-3">Useful Links</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Terms and conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
            </nav>
        </div> 
        <div className="mt-12 flex gap-10 items-center flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around w-full lg:w-1/2">
            <nav className="text-center md:text-left lg:text-left">
                <h6 className="text-xl font-bold text-orange-500 mb-3">Pages</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All tourists spot</a>
                    <a className="link link-hover">Add tourists spot</a>
                    <a className="link link-hover">My list</a>
                </div>
            </nav> 
            <form className="text-center">
                <h6 className="text-xl font-bold text-orange-500 mb-3">Socials!!</h6> 
                <fieldset className="form-control w-80">
                <div className="text-2xl flex gap-5 justify-center">
                <FaFacebook />
                <FaGithub />
                <FaTwitter/>
                <FaInstagram />
                </div>
                </fieldset>
            </form>
        </div>
        </footer>
            <div className="bg-black text-white font-bold text-center pt-10 pb-20">
                <p>Copyright © 2024 - All right reserved by <span className="text-orange-500">Journey Juncture</span></p>
            </div>
        </>
        </div>
    );
};

export default Footer;