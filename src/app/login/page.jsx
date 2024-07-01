import React from 'react';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div>
            <div className="w-full max-w-lg mx-auto p-8 space-y-3 rounded-xl shadow-2xl my-6 dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600"> User Email</label>
                        <input type="email" name="email" id="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle size={25}></FaGoogle>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FaTwitter size={25}></FaTwitter>
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub size={25}></FaGithub>
                    </button>
                </div>
                <p className=" text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <a rel="noopener noreferrer" href="signup" className="underline dark:text-green-800 text-green-400 font-bold"> Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;