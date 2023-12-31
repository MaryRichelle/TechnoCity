import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import Cart from '../Pages/Cart';
import SmartPhones from '../Pages/SmartPhones';
import HomeAppliances from '../Pages/HomeAppliances';
import SmartWatches from '../Pages/SmartWatches';
import Laptops from '../Pages/Laptops';
import Item from '../Pages/Item'
import Shop from "../Pages/Shop"


function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route path="/smartphones" element={<SmartPhones />} />
      <Route path="/smartwatches" element={<SmartWatches />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/home-appliances" element={<HomeAppliances />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Item />} />
    </Routes>
  )
}

export default AppRoutes