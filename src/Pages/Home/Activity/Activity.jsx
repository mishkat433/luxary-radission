import React from 'react';
import room from "../../../assest/room.jpg";
import resturent from "../../../assest/resturent.jpg";
import hotelView from "../../../assest/view.jpg";
import ActivityCart from '../ActivityCart/ActivityCart';

const activityData = [
    {
        id: 1,
        name: "Our Room",
        body: "Our Deluxe Room comes with either two double beds or one king bed, depending on your needs, and offers more space than the standard rooms. Unwind from your travels with a spacious bathroom with a rain shower. In the mornings, you can brew coffee in your room and check email or make ticket reservations with free Wi-Fi. ",
        image: room
    },
    {
        id: 2,
        name: "Restorent",
        body: "Although inns and hostelries often served paying guests meals from the host’s table, or table d'hôte, and beverages were sold in cafés, Boulanger’s restaurant was probably the first public place where any diner might order a meal from a menu offering a choice of dishes.",
        image: resturent
    },
    {
        id: 3,
        name: "Hotel View",
        body: "Sheaths of frosted glass cover Habita Hotel, which was opened in 2000 in a 1950s era building. The luxury hotel has original balconies but new corridors to go with it. It gets brightly.",
        image: hotelView
    }
]

const Activity = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between w-11/12 mx-auto mb-10 gap-10'>
            {
                activityData.map(cart => <ActivityCart cart={cart} key={cart.id} />)
            }
        </div>
    );
};

export default Activity;