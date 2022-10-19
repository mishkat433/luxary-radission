import React from 'react';
import RoomSlider from '../RoomSlider/RoomSlider';

const Rooms = () => {

    return (
        <div className='w-11/12 mx-auto py-16'>
            <div className='mb-20'>
                <h1 className='text-4xl mb-1 font-semibold'>Master Room</h1>
                <p className='text-lg'>Luxury room for every clients</p>
            </div>
            <RoomSlider></RoomSlider>
        </div>
    );
};

export default Rooms;