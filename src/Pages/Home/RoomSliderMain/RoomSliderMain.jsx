import React from 'react';
import RoomSlider from '../RoomSlider/RoomSlider';

const RoomSliderMain = () => {

    return (
        <div className='w-10/12 md:w-11/12 mx-auto py-16 '>
            <div className='mb-10 md:mb-20 text-center md:text-left'>
                <h1 className='text-4xl mb-1 font-semibold'>Master Room</h1>
                <p className='text-lg'>Luxury room for every clients</p>
            </div>
            <RoomSlider></RoomSlider>
        </div>
    );
};

export default RoomSliderMain;