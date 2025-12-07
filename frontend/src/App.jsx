import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";

const App = () => {
  return(
     <div>
      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/makeup/:makeupId" element={<Makeup/>}/>
    <Route path="/skincare/:skincareId" element={<Skincare/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>

  
    </Routes>
  </div>
)
}

export default App;
