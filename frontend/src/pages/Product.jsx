import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Rating } from 'react-simple-star-rating'


const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const {currency} = useContext(ShopContext);

  const [itemCount, setItemCount]=useState(1);
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
      
      
      <div className='flex max-w-7xl mx-50 px-4 my-8'>
        
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
          {/* Quantity Selector */}
{/* <div className='flex-col items-center gap-4 mt-8'>
  <p className='text-stone-700 font-normal'>Select Quantity:</p>
  <div className='flex items-center mt-4 rounded'>
    <button 
      onClick={() => setItemCount(prev => Math.max(0, prev - 1))}
      className='px-3 py-1 hover:bg-black/90 transition-colors cursor-pointer border-none bg-black'
    ><span className='font-bold text-white'>-</span>
      
    </button>
    
    <span className='px-3 py-1 font-medium text-stone-900'>
      {itemCount}
    </span>
    
    <button 
      onClick={() => setItemCount(prev => prev + 1)}
      className='px-3 py-1 hover:bg-black/90 transition-colors cursor-pointer border-none bg-black'
    >
      <span className='font-bold text-white'>+</span>
    </button>
  </div>
</div> */}


{/* Quantity Selector & Total Cost Container */}
<div className='flex items-center gap-10 mt-8'>
  
  {/* Quantity Section */}
  <div className='flex flex-col gap-1'>
    <p className='text-stone-500 text-xs uppercase tracking-wider'>Select Quantity</p>
    <div className='flex items-center rounded'>
      <button 
        onClick={() => setItemCount(prev => Math.max(0, prev - 1))}
        className='px-3 py-1 hover:bg-black/90 transition-colors cursor-pointer border-none bg-black'
      >
        <span className='font-bold text-white'>-</span>
      </button>
      
      <span className='px-4 py-1 font-medium text-stone-900 min-w-10 text-center'>
        {itemCount}
      </span>
      
      <button 
        onClick={() => setItemCount(prev => prev + 1)}
        className='px-3 py-1 hover:bg-black/90 transition-colors cursor-pointer border-none bg-black'
      >
        <span className='font-bold text-white'>+</span>
      </button>
    </div>
  </div>

  {/* Total Cost Display */}
  <div className='flex flex-col border-l border-stone-200 pl-6 gap-1'>
    <p className='text-stone-500 text-xs uppercase tracking-wider'>Total Cost</p>
    <p className='text-xl font-semibold text-stone-900'>
      {currency} {(productData.price * itemCount).toFixed(2)}
    </p>
  </div>
</div>

          <button onClick={() => addToCart(productData.id, itemCount)} className='mt-8 bg-black text-white px-8 py-3 text-sm active:bg-gray-700  transition-all cursor-pointer hover:bg-black/90'>
            ADD TO CART
          
          </button>
                 <hr className='h-px border-0 bg-stone-300 mt-15'/>
        </div>
   

      </div>
    
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;