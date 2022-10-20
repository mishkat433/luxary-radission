import React from 'react';
import Activity from '../Activity/Activity';
import HomeHeader from '../HomeHeader/HomeHeader';
import OffersSection from '../OfferseSection/OffersSection';
import RoomSliderMain from '../RoomSliderMain/RoomSliderMain';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Activity />
            <RoomSliderMain />
            <OffersSection />
        </div>
    );
};

export default Home;