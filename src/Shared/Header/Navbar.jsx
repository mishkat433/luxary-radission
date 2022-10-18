import React from 'react';
import logo from "../../assest/luxaryradisson.png";

const Navbar = () => {
    return (
        <div className=' bg-base-200' >
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><p>Item 1</p></li>
                            <li tabIndex={0}>
                                <p className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </p>
                                <ul className="p-2">
                                    <li><p>Submenu 1</p></li>
                                    <li><p>Submenu 2</p></li>
                                </ul>
                            </li>
                            <li><p>Item 3</p></li>
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost normal-case text-xl"><img className='w-16' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><p>Home</p></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <p>start</p>
                </div>
            </div >
        </div>
    );
};

export default Navbar;