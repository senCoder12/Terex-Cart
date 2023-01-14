import React from 'react'
import CartPage from '../Pages/CartPage'
import ProductsPage from '../Pages/ProductsPage'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function AllRoutes() {
  return (
        <Routes>
            <Route path ="/" element={<ProductsPage/>}/>
            <Route path ="/cart" element={<CartPage/>}/> 
        </Routes>
  )
}

export default AllRoutes