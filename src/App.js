import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import Signin from './website/Signin.js';
import Index from './website/index.js';
import Menu from './website/Menu.js';
import Orders from './website/Orders.js';
import Starters from './website/Starters.js';
import RiceItems from './website/RiceItems.js'
import Pizza from './website/Pizza.js';
import CoolDrinks from './website/CoolDrinks.js';
import MyOrders from './website/MyOrders.js';
import ReOrder from './website/ReOrder.js';
import Register from './website/Register.js';
import Login from './website/Login.js';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/index" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/riceitems" element={<RiceItems />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/cooldrinks" element={<CoolDrinks />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/reorder/:id" element={<ReOrder />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
