import React, { useState } from 'react'

import './Shoes.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import ShoesData from './ShoesData';



function Shoes() {
 const[increase1,setIncrease1]=useState(0)
 const[increase2,setIncrease2]=useState(0)
 const[increase3,setIncrease3]=useState(0)
 const[increase4,setIncrease4]=useState(0)


 const [showForm,setShowForm]=useState(false)

const[increase,setIncrease]=useState(0)


const {productItems}=ShoesData;

  return (
<div >
<div className='menTitle'>
      <h3>Mens Active wear Shoes</h3>     
      

     <div className='Category1'>
       {productItems.map((productItems)=>(
            <div className='items'>
            <img src={productItems.image} alt={productItems.name} />
            <h2>{productItems.name}</h2>
            <h4>{productItems.price}</h4>
            <button>-</button>
            <p>{increase}</p>
            <button onClick={()=>setIncrease(increase+1)}>+</button>
            </div>
       ))}
     </div>


      <img src={cartLogo} alt="" id="cart" onClick={()=>setShowForm(true)} />
    {increase?<p className="showCart">{increase}</p>:null}


      {showForm ?<div className="form-popup" id="myForm">
  <div classNme="form-container">
<h2>Cart</h2>
{!increase?<p id="title">Your Cart is empty</p>:<span className="cartIncrease">Your cart has {increase} {increase>1? 'items':'item'}</span>}
<img src={logo1} alt="" className="cartImage"/>
<p className="title2">$125 x {increase} = ${increase*125}</p>

  <button className="check" onClick={()=>setIncrease(0)}>Checkout</button>
<button className="btn cancel" onClick={()=>setShowForm(false)}>
<img src={closeLogo} alt="" />
</button>
</div>
</div>:null}

    </div>
    </div>
  )
}

export default Shoes