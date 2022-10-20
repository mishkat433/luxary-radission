import React from 'react';
import offerImg from "../../../assest/offers.jpg";

const OffersSection = () => {
    return (
        <div className='bg-cover bg-center h-[600px] my-10 flex justify-center items-center' style={{ backgroundImage: `url(${offerImg})` }}>
            <div className='bg-[#ffffff8f] p-3   '>
                <div className=' bg-[#ffffffae] px-3 py-5 lg:py-14 rounded-xl text-center'>
                    <h1 className='font-oswald text-5xl lg:text-6xl text-center text-orange-500 font-bold mb-5'>Hello!</h1>
                    <h1 className='text-4xl lg:text-5xl font-crimos font-bold'>Winter Hot offer</h1>
                    <h2 className='font-oswald text-5xl lg:text-6xl text-center text-orange-500 font-bold mt-5'>10% OFF</h2>
                    <div className='flex justify-center mt-5'>
                        <button className='text-white btn'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersSection;