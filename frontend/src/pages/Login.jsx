import React from 'react';
import { NavLink } from 'react-router-dom';
// import './login.module.css' 


const Login = () => { 
  return (
    // Panel Container (w-full h-full is likely inherited from parent sidebar div)
    <div id='login-container' className="w-full h-full flex flex-col p-6"> 
        
        {/* Header/Close Button */}
        <div className='flex justify-between items-center mb-10'>
            <h2 className='text-2xl font-bold text-gray-800'>Account Login</h2>
<NavLink to='/'>
            <button 
                id='login-btn' 
                className="btn btn-ghost btn-circle p-2 rounded-full hover:bg-gray-100" 
                
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            </NavLink>
        </div>

        {/* Form Body - Use custom class 'login-form-tailwind' for specific styles */}
        <form className="login-form-tailwind">
            
            {/* <h2>Login</h2> - Removed this H2 since 'Account Login' is in the header */}
            
            {/* Input Group 1 (Custom CSS needed for floating label) */}
            <div className="input-group-tailwind relative mb-8">
                <input 
                    type="text" 
                    id="username" 
                    required 
                    // Tailwind styles for input field
                    className="w-full pb-2 border-b-2 border-gray-300 outline-none bg-transparent text-base focus:border-black peer" 
                />
                <label 
                    htmlFor="username" 
                    // Tailwind styles for label
                    className="absolute top-2 left-0 text-gray-500 text-base pointer-events-none transition-all duration-300"
                >
                    Username
                </label>
            </div>
            
            {/* Input Group 2 */}
            <div className="input-group-tailwind relative mb-8">
                <input 
                    type="password" 
                    id="password" 
                    required 
                    className="w-full pb-2 border-b-2 border-gray-300 outline-none bg-transparent text-base focus:border-black peer" 
                />
                <label 
                    htmlFor="password" 
                    className="absolute top-2 left-0 text-gray-500 text-base pointer-events-none transition-all duration-300"
                >
                    Password
                </label>
            </div>
            
            {/* Submit Button */}
            <button 
                type="submit"
                // Tailwind styles for button
                className="w-full py-3 mt-4 bg-black rounded-lg text-white text-base font-medium cursor-pointer transition duration-300 hover:bg-gray-700"
            >
                Login
            </button>
            
            {/* Message/Sign Up Link */}
            <p className="message mt-6 text-center text-sm text-gray-600">
                Not registered? 
                <a href="signUp.html" className="text-black ml-1 font-medium hover:underline">
                    Sign Up
                </a>
            </p>
        </form>
    </div>
  );
}

export default Login;