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




const App = () => {
  return(
     <div>
      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/makeup" element={<Makeup/>}/>
    <Route path="/makeup/:makeupId" element={<Makeup/>}/>
    <Route path="/skincare/:skincareId" element={<Skincare/>}/>
    <Route path="/perfumes/:perfumesId" element={<Perfumes/>}/>
    <Route path="/skincare" element={<Skincare/>}/>
    <Route path="/perfumes" element={<Perfumes/>}/>
    {/* <Route path="/skincare/:skincareId" element={<Skincare/>}/> */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </div>
)
}

export default App;
