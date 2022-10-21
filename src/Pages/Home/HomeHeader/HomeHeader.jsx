import React from 'react';
import mainImage from "../../../assest/Header.jpg";
import bottonImg from "../../../assest/bg_ft_top.webp"
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className='bg-cover mb-10' style={{ background: `linear-gradient(rgba(118, 118, 128, 0.50),rgba(118, 118, 128, 0.40)), url(${mainImage})` }}>
            {/* <img className='' src={bottonImg} alt="botton shape" /> */}
            <div className="w-4/5 md:w-2/5 flex flex-col  justify-center text-white mx-auto h-[50vh] lg:h-[80vh] text-center lg:text-left" >
                <h1 className='text-4xl lg:text-8xl font-bold mb-2 font-crimos '>Book Early Save More...</h1>
                <p className='lg:text-2xl mb-4 text-xl'>where every stay in unique </p>
                <div className='flex flex-col lg:flex-row items-center text-center gap-5'>
                    <Link to="/" className="border-2 p-2 w-36 rounded-lg hover:bg-white hover:text-black duration-300">Explore</Link>
                    <Link to="/rooms" className=" p-2  bg-warning w-36 rounded-lg hover:bg-white hover:text-black duration-300">Book Now</Link>
                </div>
            </div >
            <img className='rotate-180' src={bottonImg} alt="botton shape" />
        </div >
    );
};

export default HomeHeader;