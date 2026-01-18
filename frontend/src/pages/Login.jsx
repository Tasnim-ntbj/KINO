import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
//   const location = useLocation();

  // Helper to check if the current route is active for styling
//   const isActive = (path) => location.pathname === path;

  return (
    <div id='login-container' className="w-full max-w-md mx-auto mt-20 px-8 py-10 bg-white shadow-sm border border-gray-100 rounded-xl">
      
      {/* --- Side-by-Side Toggle Header --- */}
      <div className="flex border-b border-gray-200 mb-8">
        <NavLink 
          to="/signup" 
          className={({ isActive }) => 
            `flex-1 text-center pb-4 text-lg font-semibold transition-all duration-200 ${
              isActive ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          Sign Up
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            `flex-1 text-center pb-4 text-lg font-semibold transition-all duration-200 ${
              isActive ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          Login
        </NavLink>
      </div>

      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Welcome Back</h2>
        <button 
          onClick={()=>navigate('/', {replace:true})}
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
            className="w-full pb-2 border-b-2 border-gray-300 outline-none bg-transparent text-base focus:border-black transition-colors" 
            placeholder='Username'
          />
        </div>
        
        <div className="input-group-tailwind relative mb-8">
          <input 
            type="password" 
            id="password" 
            required 
            className="w-full pb-2 border-b-2 border-gray-300 outline-none bg-transparent text-base focus:border-black transition-colors" 
            placeholder='Password'
          />
        </div>

        <button 
          type="submit" 
          onClick={() => navigate('/', { replace: true })}
          className="w-full py-3 mt-4 bg-black rounded-lg text-white text-base font-medium cursor-pointer transition duration-300 hover:bg-black/90"
        >
          Login
        </button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default Login;