import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomCart from '../RoomCart/RoomCart';
import headimg from "../../assest/hotelVier.jpg";
import { FaTh, FaThList } from 'react-icons/fa';

const Rooms = () => {
    const roomData = useLoaderData()
    const [view, setView] = useState(false)
    return (
        <div className='w-full'>
            <div className='h-[350px] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `linear-gradient(rgba(118, 118, 158, 0.50),rgba(118, 188, 128, 0.40)),url(${headimg})` }}>
                <h1 className='uppercase text-white text-center text-3xl lg:text-6xl font-crimos font-bold'>Chose our best room</h1>
            </div>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex gap-7 justify-between mb-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>Show Room : {roomData.length}</h1>
                    </div>
                    <div className='flex gap-5'>
                        <p className='text-xl'>view in : </p>
                        <FaTh onClick={() => setView(false)} className='text-3xl text-warning hover:cursor-pointer hidden lg:block' />
                        <FaThList onClick={() => setView(true)} className='text-3xl text-warning hover:cursor-pointer hidden lg:block' />
                    </div>
                </div>
                <div className={view ? "grid grid-cols-1 lg:grid-cols-1 gap-10 items-stress justify-items-center" : 'grid grid-cols-1 lg:grid-cols-3 gap-10 items-stress justify-items-center '}>
                    {
                        roomData.map(room => <RoomCart room={room} key={room.id} view={view} ></RoomCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;