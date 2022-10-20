import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContex } from '../../AuthContex/AuthContex';
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
    const { createUser, profileUpdate, error, setError, googleLogin } = useContext(UserContex);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const registerHandle = (e) => {
        if (formData.email && formData.password) {
            createUser(formData.email, formData.password)
                .then((result) => {
                    setError("");
                    profileUpdate(formData.name)
                    toast("Login successfully")
                    setTimeout(() => {
                        navigate(from, { replace: true })
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message)
                });
        }
        else {
            setError("email or password not valid")
        }
        e.preventDefault()
    }
    const googleLoginHandle = () => {
        googleLogin()
            .then(result => {
                setError("")
                toast("Login successfully")
                setTimeout(() => {
                    navigate(from, { replace: true })
                }, 2000);
            })
            .catch(err => { setError(err.message) })
    }

    const formHandle = (ev) => {
        let isValid = true
        if (ev.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(ev.target.value)
        }
        if (ev.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(ev.target.value)
        }
        if (isValid) {
            const valid = { ...formData }
            valid[ev.target.name] = ev.target.value;
            setFormData(valid)
        }
    }

    return (
        <div className="hero h-full mb-10">
            <ToastContainer />
            <div>
                <h1 className="text-3xl mt-5 font-bold">Register now!</h1>
                {error && <h1 className='text-red-500 mt-10 text-center'>{error}</h1>}
                <div className="card w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={registerHandle} className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={formHandle} name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={formHandle} name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={formHandle} name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className=" link link-hover">already have an account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                    </form>
                    <button className='flex gap-6 btn btn-primary mb-2 mx-8' onClick={googleLoginHandle}><FaGoogle className=' text-2xl' />Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;