import React, { useEffect, useState } from 'react'
import HomeMakeup from './HomeMakeup';
import { NavLink } from 'react-router-dom';

const HomeMakeups = () => {
    const [homeMakeups, setHomeMakeups] = useState([]);
    useEffect(() => {
        fetch("/public/MakeupProd.json")
            .then((res) => res.json())
            .then((data) => setHomeMakeups(data));

    }, [])

    const HomeMakeupSliced = homeMakeups.slice(0, 8);
    
    return (
        // Grid Container
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
            {HomeMakeupSliced.map((product) => (
                <HomeMakeup key={product.id} HomeMakeups={product} />
            ))}

          
            <div className="mt-12 col-span-full flex justify-center">
                <NavLink to="/makeup">
                <a
                    className="btn btn-ghost btn-outline border-solid text-base px-10 py-2 rounded-4xl shadow-none antialiased"
                  
                >
                    Discover the Selection
                </a>
                </NavLink>
            </div>
            
        </div>
    )
}

export default HomeMakeups;