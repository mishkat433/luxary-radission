import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assest/luxaryradisson.png";
import photoNotFound from "../../assest/notFoundImage.png";
import { UserContex } from '../../AuthContex/AuthContex';
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(UserContex);

    return (
        <div className=' bg-base-200' >
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Home</NavLink></li>
                            <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Rooms</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl"><img className='w-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/home" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Home</NavLink></li>
                        <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Rooms</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Contact</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end ">
                                <div>
                                    <label tabIndex={0} className=" flex items-center gap-3">
                                        <img className='w-10 rounded-full' src={user.photoURL === null ? photoNotFound : user.photoURL} alt="User Photorul" />
                                        <FaAngleDown />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={() => logOut()}>Log Out</button> </li>

                                    </ul>
                                </div>

                            </div>
                            : <div className='flex gap-5'>
                                <NavLink className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined} to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined} to="/register">Register</NavLink>
                            </div>
                    }
                </div>
            </div >
        </div>
    );
};

export default Navbar;