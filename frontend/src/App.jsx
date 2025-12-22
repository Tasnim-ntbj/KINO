import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import Perfumes from "./pages/Perfumes";
import AboutUs from "./pages/AboutUs";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Signup from "./pages/Signup";




const App = () => {
  return(
     <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/makeup" element={<Makeup/>}/>
    <Route path="/makeup/:productId" element={<Product/>}/>
    <Route path="/skincare/:productId" element={<Product/>}/>
    <Route path="/perfumes/:productId" element={<Product/>}/>
    <Route path="/skincare" element={<Skincare/>}/>
    <Route path="/perfumes" element={<Perfumes/>}/>
    {/* <Route path="/skincare/:skincareId" element={<Skincare/>}/> */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/cart" element={<Cart/>}/>
    {/* <Route path="/about-us" element={<AboutUs/>}/> */}
    </Routes>
    <Footer></Footer>
  </div>
)
}

export default App;
