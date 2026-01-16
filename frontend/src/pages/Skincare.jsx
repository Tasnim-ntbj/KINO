import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeSkinCare from '../components/HomeSkinCare';

const Skincare = () => {
  // 1. Get search and showSearch from Context
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterSkincare, setFilterSkincare] = useState([]);

  useEffect(() => {
    // 2. First, get your specific category slice (41 to 53)
    let skincareItems = products.slice(41, 53);

    // 3. Apply search filter if search is active
    if (showSearch && search) {
      skincareItems = skincareItems.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilterSkincare(skincareItems);
  }, [products, search, showSearch]); // 4. Run whenever these values change

  return (
    <div className='max-w-7xl mx-auto px-4 my-20'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 5. Map through the filtered list */}
        {filterSkincare.map((item, index) => (
          <HomeSkinCare 
            key={index} 
            id={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price}
          />
        ))}
      </div>

      {/* Optional: Show "Not Found" message */}
      {showSearch && search && filterSkincare.length === 0 && (
        <div className='text-center py-10'>
          <p className='text-stone-500'>No skincare products found matching "{search}"</p>
        </div>
      )}
    </div>
  )
}

export default Skincare