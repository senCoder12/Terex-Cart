import React from 'react'

function Sidebar() {
  return (
    <div className='left-bar'>
        <div>
            <h3>Color</h3>
            <div><input type="checkbox" name="" id="" /> <span>Red</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Blue</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Green</span></div>
        </div>
        <hr />
        <div>
            <h3>Gender</h3>
            <div><input type="checkbox" name="" id="" /> <span>Men</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Women</span></div>
        </div>
        <hr />
        <div>
            <h3>Price</h3>
            <div><input type="checkbox" name="" id="" /> <span>0 - Rs250</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Rs251 - Rs450</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Rs450</span></div>
        </div>
        <hr />
        <div>
            <h3>Type</h3>
            <div><input type="checkbox" name="" id="" /> <span>Polo</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Hoodie</span></div>
            <div><input type="checkbox" name="" id="" /> <span>Basic</span></div>
        </div>
    </div>
  )
}

export default Sidebar