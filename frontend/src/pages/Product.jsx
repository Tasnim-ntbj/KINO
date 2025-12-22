import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Rating } from 'react-simple-star-rating'


const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const {currency} = useContext(ShopContext);

  useEffect(() => {
    const fetchProductData = () => {
      const item = products.find((item) => item.id == productId);
      if (item) {
        setProductData(item);
        setImage(item.image);
      }
    };
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t border-t-stone-200 transition-opacity ease-in duration-500 opacity-100'>
      
      
      <div className='flex max-w-7xl mx-50 px-4 my-10'>
        
        {/* Product Image */}
        <div className='flex-1'> 
           <div className='w-full max-w-[600px]'>
              <img className='w-150 h-150 object-cover rounded-none' src={image} alt={productData.name} />
           </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 mt-25 ml-20'>
          <h1 className='font-medium text-3xl mt-2 text-stone-800'>{productData.name}</h1>
          
       
<div className='flex items-center gap-2 mt-2'>
  <div className='inline-block [&_svg]:inline'> 
    <Rating 
      initialValue={productData.rating} 
      readonly={true} 
      allowFraction={true} 
      size={25} 
      fillColor='#9e8a99' 
    />
  </div>
  <p className='text-stone-400 text-sm'>({productData.rating})</p>
</div>

          <p className='mt-5 text-3xl font-semibold text-stone-900'>{currency} {productData.price}</p>
          <p className='mt-5 text-stone-500 leading-relaxed md:w-4/5'>{productData.description}</p>
          
          <button className='mt-8 bg-black text-white px-8 py-3 text-sm active:bg-gray-700  transition-all cursor-pointer hover:bg-black/90'>
            ADD TO CART
          </button>
                 <hr className='h-px border-0 bg-stone-300 mt-15'/>
        </div>
   

      </div>
    
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;