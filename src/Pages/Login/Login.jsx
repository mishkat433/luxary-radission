import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContex } from '../../AuthContex/AuthContex';
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { loginUser, error, setError, googleLogin } = useContext(UserContex);
    const [formData, setFormData] = useState({})
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const registerHandle = (e) => {
        if (formData.email && formData.password) {
            loginUser(formData.email, formData.password)
                .then(result => {
                    setError("");
                    toast("Login successfully")
                    setTimeout(() => {
                        navigate(from, { replace: true })
                    }, 2000);
                })
                .catch((error) => {
                    setError(error.message)
                });
        }
        else { setError("email or password are not valid") }

        e.preventDefault()
    }

    const formHandle = (ev) => {
        let isValid = false
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
        console.log(isValid);
    }
    const navigate = useNavigate()
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

    return (
        <div className="hero h-full mt-10 ">
            <ToastContainer />
            <div>
                <h1 className="text-3xl my-2 font-bold">Login now!</h1>
                {error && <h1 className='text-red-500 text-center'>{error}</h1>}
                <div className="card  w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={registerHandle} className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={formHandle} name="email" type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={formHandle} name="password" type="password" placeholder="password" className="input input-bordered" />
                            <label >
                                <Link to="/register" className="text-md link link-hover">Don't have an account? Please register</Link>
                            </label>
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <button className='flex gap-6 btn btn-primary mb-2 mx-8 ' onClick={googleLoginHandle}><FaGoogle className=' text-2xl' />Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;