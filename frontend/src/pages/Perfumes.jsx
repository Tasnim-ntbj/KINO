/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import HomePerfume from '../components/HomePerfume.jsx';

const Perfumes = () => {
  // 1. Destructure search and showSearch from context
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  const applyFilter = () => {
    let productsCopy = products.slice(0,20);

    // 2. Filter logic: check if showSearch is true and if search has text
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  }

  // 3. Re-run filter whenever search or products change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    applyFilter();
  }, [search, showSearch, products]);

  return (
    <div className='max-w-7xl mx-auto px-4 my-20'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 4. Map through the filtered array instead of the original one */}
        {filterProducts.map((item, index) => (
          <HomePerfume key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
      {/* Show message if no products match */}
      {filterProducts.length === 0 && (
        <p className='text-center text-stone-500 mt-10'>No products found matching "{search}"</p>
      )}
    </div>
  )
}

export default Perfumes;