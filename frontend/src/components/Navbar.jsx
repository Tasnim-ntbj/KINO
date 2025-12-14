import { NavLink, Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useState } from 'react';


export const Navbar = () => {
    
    
    const [menu, setMenu] = useState("Home");
    
   

    const handleMenuClick = (name) => {
        setMenu(name);
    };

    return (
        <>
            {/* --- Main Navbar --- */}

            <div  id="mainNavbar" className="navbar bg-white border-b-0 sticky top-0 z-50 navbar-light-text">
                
                <div className="navbar-start">
                    {/* logo */}
                    <NavLink to='/'>
                        <a className={`text-5xl  tracking-widest ml-20 ${styles.logo}`} href="#">
                            Kino
                        </a>
                    </NavLink>
                </div>


                {/* Menu */}
                <div className="navbar-center font-medium antialiased text-lg">
                    
                    <ul className={styles.navMenu}> 
                        
                        <NavLink to="/">
                        <li 
                            onClick={() => handleMenuClick("Home")}
                            className={`${styles.navItem} ${menu === "Home" ? styles.active : ''}`}
                        >
                            Home
                        </li>
                        </NavLink>

                        <NavLink to="/perfumes">
                        <li 
                            onClick={() => handleMenuClick("Perfumes")}
                            className={`${styles.navItem} ${menu === "Perfumes" ? styles.active : ''}`}
                        >
                            Perfumes
                        </li>
                        </NavLink>
                       
                        <NavLink to="/skincare">
                        <li 
                            onClick={() => handleMenuClick("SkinCare")}
                            className={`${styles.navItem} ${menu === "SkinCare" ? styles.active : ''}`}
                        >
                        SkinCare
                        </li>
                        </NavLink>
                         <NavLink to="/makeup">
                        <li 
                            onClick={() => handleMenuClick("Makeup")}
                            className={`${styles.navItem} ${menu === "Makeup" ? styles.active : ''}`}
                        >
                        Makeup
                        </li>
                        </NavLink>
                    <NavLink to="/about-us">
                        <li 
                            onClick={() => handleMenuClick("About-us")}
                            className={`${styles.navItem} ${menu === "About-us" ? styles.active : ''}`}
                        >
                            About Us
                        </li>
                        </NavLink>
                    </ul>

                </div>

                {/* nav end */}
                <div className="navbar-end">
                    <div className="flex items-center space-x-4 ml-4">
                        {/* search */}
                        <NavLink to='/'>
                            <button  className='btn btn-ghost btn-circle'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </NavLink>
                        
                        {/* cart btn */}
                        <NavLink to='/cart'>
                            <button id="cart-btn" className="btn btn-ghost btn-circle ">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg>
                            </button>
                        </NavLink>

                        {/* login btn */}
                        <NavLink to='/login'>
                            <button className="btn btn-outline border-0 rounded-2xl hover:bg-black/10 shadow-none transition-colors duration-300 ease-in-out">
                                <span className='text-gray-600 font-light text-sm'>Sign Up</span> 
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            
        </>
    );
};