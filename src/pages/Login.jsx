import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { useForm, useFormState } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';


export const Login = () => {

   
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const dispatch = useDispatch();


        const onSubmit = (data) => {
            console.log("Form data:", data);
            dispatch(loginUser(data));
        };

        return (

            <div className='flex items-center justify-center h-screen ' >
                <div className='bg-white w-72 h-96 rounded-xl p-4'>
                    <h1 className='text-3xl text-center text-black font-bold'>Login</h1>
                    <p className='text-black text-center mb-4'>Welcome back! Please enter your details.</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor='email' className='text-black text-sm mb-1 block' >Email</label>
                            <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter you email...'
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mb-2">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mb-2">
                            <label htmlFor='password' className='text-black text-sm mb-1 block' >Password</label>
                            <div className='border border-black w-full p-2 rounded-full focus-within:border-blue-500'>
                                <input type="password"
                                    id="password"
                                    placeholder='Enter your password...'
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mb-2">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <p className='text-end mb-2'>forgot password</p>


                        <button type='submit' className='bg-blue-500 w-full text-white py-2 rounded-full hover:bg-blue-600 transition-colors'>Login</button>

                        <p className='text-black text-sm text-center'>Don't have an account? <a href='/register' className='text-blue-500 hover:underline'>Register</a></p>
                    </form>

                </div>

            </div>

        );
    }


export default Login