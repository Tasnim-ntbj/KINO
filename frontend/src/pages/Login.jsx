
import React from 'react';


const Login = ({ onClose }) => { 
  return (
    
    <div className="w-full h-full flex flex-col"> 
        {/* Header with Close Button */}
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-bold text-gray-800'>Account Login</h2>
            
            {/* Close Button using the passed prop */}
            <button className="btn btn-ghost btn-circle" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        {/* Form Body */}
        <form className="login-form">
    <h2>Login</h2>
    
    <div className="input-group">
        <input type="text" id="username" required />
        <label htmlFor="username">Username</label>
    </div>
    
    <div className="input-group">
        <input type="password" id="password" required />
        <label htmlFor="password">Password</label>
    </div>
    
    <button type="submit">Login</button>
    
    <p className="message">
        Not registered? <a href="signUp.html">Sign Up</a>
    </p>
</form>
    </div>
  );
}

export default Login;