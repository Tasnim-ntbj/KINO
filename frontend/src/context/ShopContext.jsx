import { createContext, useState } from "react";
import { products } from "../assets/assets";
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '৳';
    const delivery_fee=10;
    const [search, setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems, setCartItems] = useState({});
    

//add to cart logic 
const addToCart = (itemId, quantity) => {
        if (quantity <= 0) { alert("Please Select at least one item");
             return;}

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += quantity;
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
        alert("Item has been added to the cart!");
    };

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        // Set quantity to 0 to remove it from the display list
        cartData[itemId] = 0; 
        setCartItems(cartData);
    };

    const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      let itemInfo = products.find((product) => product.id == itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
  }
  return totalAmount;
};
    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart,cartItems, removeFromCart,getCartAmount
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;