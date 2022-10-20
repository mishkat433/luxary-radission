import React from 'react';
import logo from "../../assest/luxaryradissonwhite.png";
import footerImg from "../../assest/bg_ft_top.webp"

const Footer = () => {
    return (
        <div className='bg-black '>
            <img src={footerImg} alt="" />
            <div className='w-11/12 mx-auto py-10 text-white' >
                <div className='flex'>
                    <div className='w-4/5'>
                        <img className='w-20 mb-5' src={logo} alt="logo" />
                    </div>
                    <h1 className='text-4xl w-2/5  font-crimos'>Get our news first</h1>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-6'>
                    <div >
                        <p >cell : <span className='text-gray-500'>+8801521xxxxxx</span></p>
                        <p>Email : <span className='text-gray-500'>mishkat433@gmail.com</span></p>
                        <p className='mt-5'>Address : Pekua, Cox's Bazar, Chittagong, Bangladesh, Earth.</p>
                    </div>
                    <ul className=' flex flex-col gap-y-3 items-center cursor-pointer'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className="form-control ">
                        <label className="input-group ">
                            <input type="emal" placeholder="example@gmail.com" className="input w-3/5 md:w-full text-black input-bordered" required />
                            <button type='submit' className='btn btn-warning  w-16 lg:w-20'>Send</button>
                        </label>
                    </div>
                </div>
                <hr className='border-1 mt-10 border-gray-500' />
                <h4 className='text-center mt-5 text-gray-500'>Developed by Mishk@t - {new Date().getFullYear()}</h4>
            </div>

        </div>
    );
};

export default Footer;