import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import SmartPhones from './Pages/SmartPhones';
import Electronics from './Pages/Electronics';
import SmartWatches from './Pages/SmartWatches';
import Laptops from './Pages/Laptops';




function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/smartphones" element={<SmartPhones />} />
      <Route path="/smartwatches" element={<SmartWatches />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/electronicAppliances" element={<Electronics />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  )
}

export default AppRoutes