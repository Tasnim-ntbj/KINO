import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import './login.module.css' 


const Login = () => { 
        const navigate = useNavigate();
  return (
    
    <div id='login-container' className="w-full h-full flex flex-col mx-auto mt-50 px-140 my-20' "> 
        
  
        <div className='flex justify-between items-center mb-10'>
            <h2 className='text-2xl font-bold text-gray-800'>Account Login</h2>

            <button  onClick={()=>navigate('/', {replace:true})}
                id='login-btn' 
                className="btn btn-ghost btn-circle p-2 rounded-full hover:bg-gray-100" 
                
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        
        </div>

        <form className="login-form-tailwind">
            
          
            <div className="input-group-tailwind relative mb-8">
                <input 
                    type="text" 
                    id="username" 
                    required 
            
                    className="w-full pb-2 border-b-2 border-gray-300 outline-none bg-transparent text-base focus:border-black peer" 
                />
                <label 
                    htmlFor="username" 
                    
                    className="absolute top-2 left-0 text-gray-500 text-base pointer-events-none transition-all duration-300"
                >
                    Username
                </label>
            </div>
            
          
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
  
            <button 
                type="submit"  onClick={()=>navigate('/', {replace:true})}
              
                className="w-full py-3 mt-4 bg-black rounded-lg text-white text-base font-medium cursor-pointer transition duration-300 hover:bg-gray-700"
            >
                Login
            </button>
           
            <p className="message mt-6 text-center text-sm text-gray-600">
                Not registered? 
                <NavLink to="/sign-up">
                <a  className="text-black ml-1 font-medium hover:underline">
                    Sign Up
                </a>
                </NavLink>
            </p>
        </form>
    </div>
  );
}

export default Login;