import React from 'react'
import ProductsComp from '../Components/ProductsComp'
import Sidebar from '../Components/Sidebar'

function ProductsPage() {
  return (
    <div className='display-flex'>
        <Sidebar/>
        <ProductsComp/>
    </div>
  )
}

export default ProductsPage