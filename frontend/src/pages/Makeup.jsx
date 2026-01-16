import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomeMakeup from '../components/HomeMakeup';

const Makeup = () => {
  // 1. Pull search and showSearch from context
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterMakeup, setFilterMakeup] = useState([]);

  useEffect(() => {
    // 2. Define your specific makeup range (indices 21 to 41)
    let makeupItems = products.slice(21, 41);

    // 3. Filter the list if the search bar is active and has text
    if (showSearch && search) {
      makeupItems = makeupItems.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterMakeup(makeupItems);
  }, [products, search, showSearch]); // 4. Re-run filter when search changes

  return (
    <div className='max-w-7xl mx-auto px-4 my-20'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 5. Map through filterMakeup instead of the static slice */}
        {filterMakeup.map((item, index) => (
          <HomeMakeup 
            key={index} 
            id={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price}
          />
        ))}
      </div>

      {/* 6. Show a message if no makeup products match the search */}
      {showSearch && search && filterMakeup.length === 0 && (
        <div className='text-center py-10'>
          <p className='text-stone-500'>No makeup products match your search "{search}"</p>
        </div>
      )}
    </div>
  )
}

export default Makeup;