import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
        <li><NavLink to="/addTouristSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList">My List</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                    <h2 className="text-3xl font-bold text-orange-500">Journey <span className="text-black">Juncture</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {user && user.photoURL ? 
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                    <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt="" />
                            </div>
                </label>
                         : 
                         ''
                    }
                    {
                    user ? <button onClick={handleSignOut} className="btn bg-orange-400 ml-2">Logout</button>
                    :
                    <div>
                    <Link to="/login">
                    <button className="btn bg-orange-400 ml-2">Login</button>
                    </Link>
                    <Link to="/register">
                    <button className="btn bg-orange-400 ml-2">Register</button>
                    </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;