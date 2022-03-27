import React, { useState } from 'react'
// import logo from '../src/images/Shoess/logo.svg'

import './Sneakers.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import SneakersData from './SneakersData';



function Sneakers() {
 const[increase11,setIncrease111]=useState(0)
 const[increase12,setIncrease112]=useState(0)
 const[increase13,setIncrease113]=useState(0)
 const[increase14,setIncrease114]=useState(0)


 const [showForm,setShowForm]=useState(false)

const[increase1,setIncrease1]=useState(0)


const {productItems}=SneakersData;

  return (
<div >
    <h2>Sneakers</h2>
<div className='menTitle'>
      <h3>Mens Active wear Sneakers</h3>     
    {/* <div className='Category1'> */}
      

     <div className='Category1'>
       {productItems.map((productItems)=>(
            <div className='items'>
            <img src={productItems.image} alt={productItems.name} />
            <h2>{productItems.name}</h2>
            <h4>{productItems.price}</h4>
            <button>-</button>
            <p>{increase1}</p>
            <button onClick={()=>setIncrease1(increase1+1)}>+</button>
            </div>
       ))}
     </div>


      {/* <img src={cartLogo} alt="" id="cart" onClick={()=>setShowForm(true)} />
    {increase1?<p className="showCart">{increase1}</p>:null}


      {showForm ?<div className="form-popup" id="myForm">
  <div classNme="form-container">
<h2>Cart</h2>
{!increase1?<p id="title">Your Cart is empty</p>:<span className="cartincrease1">Your cart has {increase1} {increase1>1? 'items':'item'}</span>}
<img src={logo1} alt="" className="cartImage"/>
<p className="title2">$125 x {increase1} = ${increase1*125}</p>

  <button id="check" onClick={()=>setIncrease1(0)}>Checkout</button>
<button className="btn cancel" onClick={()=>setShowForm(false)}>
<img src={closeLogo} alt="" />
</button>
</div>
</div>:null} */}

      {/* <div className='Category1'>
      <img src={shoe1} alt="" />
      <h2>Nike LeBron 9</h2>
      <h4>₹17,495</h4>
      {increase1>0?<button className='minus' onClick={()=>setIncrease11(increase1-1)}>-</button>:null}
      <p className='contents'>{increase1}</p>
      <button className='plus' onClick={()=>setIncrease11(increase1+1)}>+</button>
      </div> */}

      {/* <img src={shoe1} alt="" />
      <img src={shoe2} alt="" /> */}
    {/* </div> */}
    </div>
    </div>
  )
}

export default Sneakers