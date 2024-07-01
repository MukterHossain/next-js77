'use client'
import React from 'react';

const SignUpPage = () => {


    const handleRegister = async(event) =>{
        event.preventDefault()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            image: event.target.image.value,
            type: event.target.type.value,
            password: event.target.password.value,
        }
        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type' : 'application/json'
            }
        })
        console.log(resp)
    }
    return (
        <div>
            <div className="w-full max-w-lg mx-auto p-8 space-y-3 rounded-xl shadow-2xl my-6 dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleRegister} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">User Name</label>
                        <input type="text" name="name" id="username" placeholder="User Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">User Email</label>
                        <input type="email" name="email" id="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">User Photo</label>
                        <input type="text" name="image" id="photo" placeholder="User Photo" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    {/* <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">User Photo</label>
                        <input type="file" name="photo" id="photo" placeholder="User Photo" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div> */}
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">Type</label>
                        <select name="type" placeholder="user type" className='outline-none border-transparent p-3 text-slate-700'>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="member">Member</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <p className=" text-center sm:px-6 dark:text-gray-600">If you have an account 
                    <a rel="noopener noreferrer" href="login" className="underline dark:text-green-800 text-green-400 font-bold"> Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;