import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../slice/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';


export const Register = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const onSubmit = (payload) => {
        console.log("Form data:", payload);
        dispatch(registerUser(payload));
        Navigate('/');
        reset();
    };


    return (
        <div className='flex items-center justify-center h-screen ' >
            <div className='bg-white w-72  rounded-xl p-4'>
                <h1 className='text-3xl text-center text-black font-bold'>Register</h1>
                <p className='text-black text-center mb-4'>Welcome back! Please enter your details.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor='name' className='text-black text-sm mb-1 block' >Full Name</label>
                        <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                            <input type="text"
                                id="name"
                                placeholder='Enter your full name...'
                                className='outline-none w-full border-none'
                                {...register("name", {
                                    required: "Full name is required",
                                })}
                            />
                        </div>
                        {errors.name && (
                            <p className='text-red-500 text-sm'>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor='email' className='text-black text-sm mb-1 block' >Email</label>
                        <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                            <input type="text"
                                id="email"
                                placeholder='Enter you email...'
                                className='outline-none w-full border-none'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                        </div>
                        {errors.email && (
                            <p className='text-red-500 text-sm'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>



                    <div className="mb-3">
                        <label htmlFor='dob' className='text-black text-sm mb-1 block' >Date of birth</label>
                        <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                            <input type="date"
                                id="dob"
                                placeholder='Enter your date of birth...'
                                className='outline-none w-full border-none'
                                {...register("dob", {
                                    required: "Date of birth is required"
                                })}
                            />
                        </div>
                        {errors.dob && (
                            <p className='text-red-500 text-sm'>
                                {errors.dob.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor='password' className='text-black text-sm mb-1 block' >Password</label>
                        <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                            <input type="password"
                                id="password"
                                placeholder='Enter your password...'
                                className='outline-none w-full border-none'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                        </div>
                        {errors.password && (
                            <p className='text-red-500 text-sm'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button type='submit' className='bg-blue-500 w-full text-white py-2 rounded-full hover:bg-blue-600 transition-colors'>Register</button>

                    <p className='text-black text-sm text-center'>You have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a></p>
                </form>

            </div>

        </div>
    );
};
