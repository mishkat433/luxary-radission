import React, { useEffect, useState } from 'react';
import { FaCoffee, FaShower, FaTv, FaWifi, FaWineBottle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Booking = () => {
    const [choseRoom, setChoseRoom] = useState({})
    const { image, title, para } = choseRoom;
    const [checkOut, setCheckout] = useState({})
    const [payment, setPayment] = useState(false)

    const navigate = useNavigate()
    const id = Number(localStorage.getItem("id")
    )

    useEffect(() => {
        fetch("room.json")
            .then(res => res.json())
            .then(data => {
                setChoseRoom(data.find(d => d.id === id))
            })
    }, [id])
    const checkoutHandle = (e) => {
        console.log(checkOut);
        if (checkOut.name && checkOut.email && checkOut.address && checkOut.phone) {
            setPayment(true)
        }
        if (checkOut.name && checkOut.email && checkOut.address && checkOut.phone && checkOut.cardNumber) {
            e.target.reset();
            setPayment(false);
            setCheckout({});
            toast("booking confirm successfull")
            setTimeout(() => {
                localStorage.setItem("id", null);
                navigate("/rooms");
            }, 3000);
        }
        e.preventDefault();
    }

    const fornDataHandle = (e) => {
        const data = { ...checkOut }
        data[e.target.name] = e.target.value;
        setCheckout(data)
    }

    return (
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-10 justify-around mt-10'>
            <ToastContainer />
            <div className='w-full lg:w-3/5'>
                <div className="card card-compact bg-none shadow-xl">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <figure><img className='w-full h-[400px]' src={image} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>{para}</p>
                        <div className='flex justify-around my-4 text-gray-400 text-xl '>
                            <FaCoffee /> <FaWifi /><FaTv /><FaShower /><FaWineBottle />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/5'>
                <div className="hero lg:w-4/5 mx-auto">
                    <form onSubmit={checkoutHandle} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        {!payment ?
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input onChange={fornDataHandle} type="text" name='name' placeholder="full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={fornDataHandle} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address : </span>
                                    </label>
                                    <input onChange={fornDataHandle} type="text" name='address' placeholder="address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Contact : </span>
                                    </label>
                                    <input onChange={fornDataHandle} type="number" name='phone' placeholder="+880" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Payment</button>
                                </div>
                            </div> :
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Card Number</span>
                                    </label>
                                    <input onChange={fornDataHandle} type="number" name='cardNumber' placeholder="full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Checkout</button>
                                </div>
                            </div>
                        }
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Booking;