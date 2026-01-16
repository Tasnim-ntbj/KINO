import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  // 1. Added getCartAmount and delivery_fee to the destructuring
  const { products, currency, cartItems, removeFromCart, getCartAmount, delivery_fee } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          id: items,
          quantity: cartItems[items]
        });
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='pt-14 px-4 sm:px-[5vw]'>
      <h1 className='text-2xl mb-3 font-medium text-stone-800'>My <span  className='text-stone-500'>Cart</span></h1>
      
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((p) => p.id == item.id);
          
          return (
            <div key={index} className='py-4 border-t border-b border-stone-200 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image} alt="" />
                <div>
                  <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-stone-50'>Qty: {item.quantity}</p>
                  </div>
                </div>
              </div>
              
              <p className='text-lg font-semibold'>
                <span className='text-sm font-medium text-stone-500'>Total:  </span>
                {currency}{(productData.price * item.quantity).toFixed(2)}
              </p>

              <button 
                onClick={() => removeFromCart(item.id)}
                className='text-stone-400 hover:text-red-600 cursor-pointer text-2xl transition-colors'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      {/* --- COST SUMMARY --- */}
      <div className='flex justify-center my-20'>
        <div className='w-full sm:w-[450px] flex flex-col gap-4'>
          <div className='text-2xl'>
            <h2 className='text-stone-800 font-medium uppercase'>Cart <span className='text-stone-500'>Totals</span></h2>
          </div>

          <div className='flex flex-col gap-2 mt-2 text-sm text-stone-700'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{currency} {getCartAmount().toFixed(2)}</p>
            </div>
            <hr className='border-stone-200' />
            <div className='flex justify-between'>
              <p>Shipping Fee</p>
              <p>{currency} {delivery_fee.toFixed(2)}</p>
            </div>
            <hr className='border-stone-200' />
            <div className='flex justify-between text-base font-bold text-stone-900'>
              <p>Total</p>
              {/* If cart is empty, total should be 0, otherwise add fee */}
              <p>{currency} {getCartAmount() === 0 ? 0 : (getCartAmount() + delivery_fee).toFixed(2)}</p>
            </div>
          </div>

          {/* <div className='w-full text-center'>
            <button className='bg-black text-white px-8 py-3 text-sm mt-4 active:bg-stone-700 hover:bg-black/90 transition-all cursor-pointer uppercase'>
              Proceed to Checkout
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;