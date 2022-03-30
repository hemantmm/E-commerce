import React, { useState } from 'react'

import './Slippers.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import SlippersData from './SlippersData';



function Slippers() {

 const [showForm,setShowForm]=useState(false)

const[increase2,setincrease2]=useState(0)


const {productItems}=SlippersData;

  return (
<div >
    {/* <h2>Slippers</h2> */}
<div className='menTitle'>
      <h3>Mens Active wear Slippers</h3>     
    {/* <div className='Category1'> */}
      

     <div className='Category1'>
       {productItems.map((productItems)=>(
            <div className='items'>
            <img src={productItems.image} alt={productItems.name} />
            <h2>{productItems.name}</h2>
            <h4>{productItems.price}</h4>
            <button>-</button>
            <p>{increase2}</p>
            <button onClick={()=>setincrease2(increase2+1)}>+</button>
            </div>
       ))}
     </div>


      {/* <img src={cartLogo} alt="" id="cart" onClick={()=>setShowForm(true)} />
    {increase2?<p className="showCart">{increase2}</p>:null}


      {showForm ?<div className="form-popup" id="myForm">
  <div classNme="form-container">
<h2>Cart</h2>
{!increase2?<p id="title">Your Cart is empty</p>:<span className="cartincrease2">Your cart has {increase2} {increase2>1? 'items':'item'}</span>}
<img src={logo1} alt="" className="cartImage"/>
<p className="title2">$125 x {increase2} = ${increase2*125}</p>

  <button id="check" onClick={()=>setincrease2(0)}>Checkout</button>
<button className="btn cancel" onClick={()=>setShowForm(false)}>
<img src={closeLogo} alt="" />
</button>
</div>
</div>:null} */}

    </div>
    </div>
  )
}

export default Slippers