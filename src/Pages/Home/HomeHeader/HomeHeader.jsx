import React from 'react';
import mainImage from "../../../assest/Header.jpg";
import bottonImg from "../../../assest/bg_ft_top.webp"
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className='bg-cover mb-10' style={{ background: `linear-gradient(rgba(118, 118, 128, 0.50),rgba(118, 118, 128, 0.40)), url(${mainImage})` }}>
            {/* <img className='' src={bottonImg} alt="botton shape" /> */}
            <div className="w-4/5 md:w-2/5 flex flex-col  justify-center text-white mx-auto h-[50vh] lg:h-[80vh]" >
                <h1 className='text-4xl lg:text-8xl font-bold mb-2 font-crimos'>Book Early Save More...</h1>
                <p className='text-2xl mb-4'>where every stay in unique </p>
                <div>
                    <Link to="/" className="border-2 py-2 px-14 text-xl rounded-md text-white duration-300 border-white hover:bg-white hover:text-black mr-10">Explore</Link>
                    <Link to="/rooms" className=" py-2 px-14 text-xl rounded-md text-white duration-300 border-amber-500 bg-amber-500 border-2 hover:border-white hover:bg-white hover:text-black">Book Now</Link>
                </div>
            </div >
            <img className='rotate-180' src={bottonImg} alt="botton shape" />
        </div >
    );
};

export default HomeHeader;