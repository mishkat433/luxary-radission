import React from 'react';
import { FaCoffee, FaShower, FaTv, FaWifi, FaWineBottle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoomCart = ({ room, view }) => {
    const { title, image, price, para, id } = room;

    const idHandle = () => {

        localStorage.setItem("id", id)
    }

    return (
        <div className={view ? "flex shadow-xl rounded-xl " : "card card-compact bg-none shadow-xl"}>
            <figure><img className={view ? "w-[600px] h-[400px] mr-10 rounded-l-xl" : 'w-full h-[300px]'} src={image} alt="Shoes" /></figure>
            <div className={view ? "w-1/2 card-body" : "card-body"}>
                <h2 className="card-title">{title}</h2>
                <p>{para}...</p>
                <div className='flex justify-around my-4 text-gray-400 text-xl'>
                    <FaCoffee /> <FaWifi /><FaTv /><FaShower /><FaWineBottle />
                </div>
                <hr className='border-1 my-1 text-gray-400' />
                <div className=''>
                    <h3 className=' text-xl '>Price: <span className='text-2xl font-semibold'> ${price}</span>/night</h3>
                </div>
                <div className="card-actions justify-end mt-3">
                    <Link to="/booking" onClick={idHandle} className="btn btn-warning text-white hover:bg-white hover:text-black ">Book Now</Link>
                </div>
            </div>
        </div>

    );
};

export default RoomCart;