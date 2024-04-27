import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="mx-auto w-11/12">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;