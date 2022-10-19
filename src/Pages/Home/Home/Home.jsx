import React from 'react';
import Activity from '../Activity/Activity';
import HomeHeader from '../HomeHeader/HomeHeader';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Activity />
            <Rooms />
        </div>
    );
};

export default Home;