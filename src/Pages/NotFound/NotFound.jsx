import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Header/Navbar';

const NotFound = () => {
    const error = useRouteError()
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-3xl mt-5'>Opps! an error occurred</h1>
                {
                    error && <div className='text-red-500'>
                        <p className='mt-5 text-3xl'>{error.status} error</p>
                        <p className='mt-5 text-3xl'>{error.statusText || error.message}</p>
                    </div>
                }
            </div>
            <Footer />
        </div >

    );
};

export default NotFound;