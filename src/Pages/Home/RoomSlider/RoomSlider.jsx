import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCoffee, FaShower, FaTv, FaWifi, FaWineBottle } from "react-icons/fa";
import "./Room.css"
import { Link } from 'react-router-dom';


const RoomSlider = () => {
    const [slideData, setSlideData] = useState([])
    useEffect(() => {
        fetch("room.json")
            .then(res => res.json())
            .then(data => setSlideData(data))
    }, [])

    const idHandle = (id) => {
        localStorage.setItem("id", id)
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerPadding: "60px",
                    dots: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            }
        ]
    };



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", }}
                onClick={onClick}
            />
        );
    }

    return (
        <div >
            <Slider {...settings} className="">
                {
                    slideData.map(slide => <div key={slide.id} className="card card-compact bg-none w-52 shadow-xl">
                        <figure><img className='w-full h-[200px]' src={slide?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{slide.title}</h2>
                            <p>{slide.para.slice(0, 200)}...</p>
                            <div className='flex justify-around my-4 text-gray-400 text-xl '>
                                <FaCoffee /> <FaWifi /><FaTv /><FaShower /><FaWineBottle />
                            </div>
                            <hr className='border-1 my-1 text-gray-400' />
                            <div className=''>
                                <h3 className=' text-xl '>Price: <span className='text-2xl font-semibold'> ${slide.price}</span>/night</h3>
                            </div>
                            <div className="card-actions justify-end mt-3">
                                <Link to="/booking" onClick={() => idHandle(slide.id)} className="btn btn-warning text-white hover:bg-white hover:text-black ">Book Now</Link>
                            </div>
                        </div>
                    </div>)
                }

            </Slider>
        </div >
    );
};

export default RoomSlider;