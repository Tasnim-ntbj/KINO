import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
      <div
      id="mainNavbar"
      class="navbar bg-transparent border-b-0 sticky top-0 z-50 navbar-light-text"
    >
      <div class="navbar-start">
        
    
        {/* menu categories btn */}
        <NavLink to='/categories'>
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button> 
        </NavLink>
    
       
        {/* search btn */}
        <NavLink to='/'>
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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

        {/* logo  */}
      <div class="navbar-center">
      <NavLink to='/'>
      <a class="text-3xl font-bold tracking-widest uppercase" href="#"
          >KINO</a
        >
      </NavLink>
        
      </div>

      <div class="navbar-end">
        <div class="flex items-center space-x-4 ml-4">

            {/* cart btn  */}
            <NavLink to='/cart'>
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          </NavLink>

          {/* login btn  */}
          <NavLink to='/login'>
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          </NavLink>
        </div>
      </div>
    </div>

  )
}