import React from 'react';

const ActivityCart = ({ cart }) => {
    const { name, body, image } = cart;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{body}</p>
            </div>
        </div>
    );
};

export default ActivityCart;