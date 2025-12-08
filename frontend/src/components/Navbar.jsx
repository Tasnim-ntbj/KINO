import React, { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';

export const Navbar = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };


    const sidebarClasses = `
        menu flex flex-col bg-base-100  w-56 
        fixed top-0 left-0 h-full p-4 shadow-xl z-50 
        transform transition-transform duration-600
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    `;

    const navbar = document.getElementById("mainNavbar");
const scrollThreshold = 100;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


  return (
    <>
      {/* --- Main Navbar --- */}
     
    <div
      id="mainNavbar"
      class="navbar bg-transparent border-b-0 sticky top-0 z-50 navbar-light-text"
    >
      <div class="navbar-start">
        
        <button class="btn btn-ghost flex items-center space-x-2" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<span class="text-lg font-medium">Menu</span>
</button>

  <NavLink to='/'>
       <button class="btn btn-ghost btn-circle flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none" 
    viewBox="0 0 20 20" 
    stroke-width="1.5" 
    stroke="currentColor" 
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</button>
</NavLink>
</div>


        {/* logo */}
        <div className="navbar-center">
          <NavLink to='/'>
            <a className="text-3xl font-bold tracking-widest uppercase" href="#">
              KINO
            </a>
          </NavLink>
        </div>

        {/* nav end */}
        <div className="navbar-end">
          <div className="flex items-center space-x-4 ml-4">
            {/* cart btn */}
            <NavLink to='/cart'>
              <button className="btn btn-ghost btn-circle">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          
              </button>
            </NavLink>

            {/* login btn */}
            <NavLink to='/login'>
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>


      

{/* sidebar  */}
      <ul class={sidebarClasses}>
        <button className="btn btn-ghost btn-circle self-end mb-4" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button> 
  <li>
    <h2 class="menu-title">Categories</h2>
    <ul>
      <li><NavLink onClick={toggleSidebar} to='/skincare' ><a>Skincare</a></NavLink></li>
      <li><NavLink onClick={toggleSidebar} to='/makeup'><a>Makeup</a></NavLink></li>
      <li><NavLink onClick={toggleSidebar} to='/fragnance'><a>Fragnance</a></NavLink></li>
      
    </ul>
  </li>
</ul>


      {/*
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-20 z-40 transition-opacity duration-600"
          onClick={toggleSidebar} // Clicking the backdrop closes the sidebar
        ></div>
      )} */}
    </>
  );
};