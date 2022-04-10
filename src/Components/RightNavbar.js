import React, { useState } from "react";
import cartLogo from '../images/icon-cart.svg'
import logo1 from '../images/image-product-1.jpg'
import closeLogo from '../images/icon-close.svg'

export default function RightNavbar() {
  const [showForm, setShowForm] = useState(false)

  const [increase, setIncrease] = useState(0)

   function proceed()
   {
     alert("hi")
     setIncrease(0)
   }

  return (
    <>
      <img src={cartLogo} alt="" id="cart" onClick={() => setShowForm(true)} />
      {increase ? <p className="showCart">{increase}</p> : null}

      <div className="Content">
        <h3>Sneaker Company</h3>
        <span>Fall Limited Edition Sneakers</span>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <h2>$125.00 <span>50%</span></h2>
        <div class="underline3" style={{ "text-decoration": "line-through", width: "82%", top: "90%", position: "absolute", opacity: .5, fontSize: "larger" }}>$250.00</div>
        <button className="addCart" onClick={() => setIncrease(increase + 1)} >
          <img src={cartLogo} alt="" />
          Add to cart
        </button>
      </div>


      {showForm ? <div className="form-popup" id="myForm">
        <div classNme="form-container">
          <h2>Cart</h2>
          {!increase ? <p id="title">Your Cart is empty</p> : <span className="cartIncrease">Your cart has {increase} {increase > 1 ? 'items' : 'item'}</span>}
          <img src={logo1} alt="" className="cartImage" />
          <p className="title2">$125 x {increase} = ${increase * 125}</p>
         {increase? <button className="proceed" onClick={proceed}>Proceed</button>:null}

          <button id="check" onClick={() => setIncrease(0)}>Checkout</button>
          <button className="btn cancel" onClick={() => setShowForm(false)}>
            <img src={closeLogo} alt="" />
          </button>
        </div>
      </div> : null}

    </>
  );

}