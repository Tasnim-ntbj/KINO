import React, { useEffect, useState } from 'react'
import HomeMakeup from './HomeMakeup';

const HomeMakeups = () => {
    const [homeMakeups, setHomeMakeups] = useState([]);
    useEffect(() => {
        fetch("/public/MakeupProd.json")
            .then((res) => res.json())
            .then((data) => setHomeMakeups(data));

    }, [])

    const HomeMakeupSliced = homeMakeups.slice(0, 8);
    
    return (
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            {HomeMakeupSliced.map((product) => (
                <HomeMakeup key={product.id} HomeMakeups={product} />
            ))}
        
        </div>
    )
}

export default HomeMakeups