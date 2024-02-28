import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center'>
                <img className='hidden absolute sm:block w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/d892049d-d795-45e5-9e01-61e72ea0c139/ID-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
                <div className='absolute bg-black/60 top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[440px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col mt-8'>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder='Email'
                                    autoComplete='email'
                                    className='bg-transparent border-b-2 border-white py-2 focus:outline-none'
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder='Password'
                                    autoComplete='current-password'
                                    className='bg-transparent border-b-2 border-white py-2 focus:outline-none'
                                />
                                <button className='bg-red-600 text-white py-2 mt-8'>Sign In</button>
                            </form>
                            <div className='flex justify-between mt-8 text-sm'>
                                <div>
                                    <input type="checkbox" id='checkbox' className='mr-2' />
                                    <label htmlFor="checkbox">Remember me</label>
                                </div>
                                <a href='/forgot-password' className='text-red-600 font-bold'>Forgot Password?</a>
                            </div>
                            <p className='text-sm mt-8'>
                                <span>Don't have an account?</span>
                                <Link to='/signup' className='text-red-600 font-bold ml-1'>Sign Up</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login