import React from 'react';
import Activity from '../Activity/Activity';
import HomeHeader from '../HomeHeader/HomeHeader';
import RoomSliderMain from '../RoomSliderMain/RoomSliderMain';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Activity />
            <RoomSliderMain />
        </div>
    );
};

export default Home;