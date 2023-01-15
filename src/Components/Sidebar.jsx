import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getFilterProducts} from "../Utils/filterMangement.js"
import { setFilterProducts,resetFilterProducts } from "../Redux/Features/ProductSlice";
function Sidebar() {
    const {defaultProducts} = useSelector((state)=>({...state.products})); 
    const dispatch = useDispatch();
    const [userinfo, setUserInfo] = useState({
        color: [],
        gender: [],
        price: [],
        type: []
      });
    useEffect(() => {
        getFilterProducts({userinfo,defaultProducts,dispatch,setFilterProducts,resetFilterProducts});
    }, [userinfo])
    
    const handleChange = (e)=> {
        const {value,name,checked} = e.target;
        let {color,gender,price,type} = userinfo;
        if(checked) {
            if(name ==="color") {
                color.push(value);
                setUserInfo({...userinfo,color});
            } else if(name ==="gender") {
                gender.push(value);
                setUserInfo({...userinfo,gender});
            } else if(name ==="price") {
                price.push(value);
                setUserInfo({...userinfo,price});
            } else if(name ==="type") {
                type.push(value);
                setUserInfo({...userinfo,type});
            }
        } else {
            if(name ==="color") {
                setUserInfo({...userinfo, color: color.filter((el) => el != value)});
            } else if(name ==="gender") {
                setUserInfo({...userinfo,gender: gender.filter((el) => el != value)});
            } else if(name ==="price") {
                setUserInfo({...userinfo,price: price.filter((el) => el != value)});
            } else if(name ==="type") {
                setUserInfo({...userinfo,type: type.filter((el) => el != value)});
            }
        }
    }
  return (
    <div className='left-bar'>
        <div>
            <h3>Color</h3>
            <div><input type="checkbox" name="color" value="Red" onChange={handleChange} /> <span>Red</span></div>
            <div><input type="checkbox" name="color" value="Blue" onChange={handleChange} /> <span>Blue</span></div>
            <div><input type="checkbox" name="color" value="Green" onChange={handleChange} /> <span>Green</span></div>
        </div>
        <hr />
        <div>
            <h3>Gender</h3>
            <div><input type="checkbox" name="gender" value="Men" onChange={handleChange} /> <span>Men</span></div>
            <div><input type="checkbox" name="gender" value="Women" onChange={handleChange} /> <span>Women</span></div>
        </div>
        <hr />
        <div>
            <h3>Price</h3>
            <div><input type="checkbox" name="price"  value="250" onChange={handleChange} /> <span>0 - Rs250</span></div>
            <div><input type="checkbox" name="price"  value="450" onChange={handleChange} /> <span>Rs251 - Rs450</span></div>
            <div><input type="checkbox" name="price" value="500" onChange={handleChange} /> <span>More Than Rs450</span></div>
        </div>
        <hr />
        <div>
            <h3>Type</h3>
            <div><input type="checkbox" name="type" value="Polo" onChange={handleChange} /> <span>Polo</span></div>
            <div><input type="checkbox" name="type" value="Hoodie" onChange={handleChange} /> <span>Hoodie</span></div>
            <div><input type="checkbox" name="type" value="Basic" onChange={handleChange} /> <span>Basic</span></div>
        </div>
    </div>
  )
}

export default Sidebar