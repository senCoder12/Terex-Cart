import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h3>Terex Products</h3>
        <div className='display-flex'>
            <p>Products</p>
            <img src="shopping.png" alt="" className='curtIcon'/>
        </div>
    </div>
  )
}

export default Header