import React, { useState } from 'react'
import './Shoes.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import data from './ShoesData';

function Shoes() {

  const [showForm, setShowForm] = useState(false)
  const [increase, setIncrease] = useState(0)
  const [inc1, setInc1] = useState(0);
  const [inc2, setInc2] = useState(0);
  const [inc3, setInc3] = useState(0);
  const [inc4, setInc4] = useState(0);


  const { productItems } = data;

  const btnHandle = (id) => {
    console.log('sub', id)
    {
      productItems.map((data) => (
        data.id === id && console.log(data.name)
      ))
    }
    id === 1 && setInc1(prev => prev - 1);
    id === 2 && setInc2(prev => prev - 1);
    id === 3 && setInc3(prev => prev - 1);
    id === 4 && setInc4(prev => prev - 1);
  }

  const btnPHandle = (id) => {
    console.log('add', id)
    {
      productItems.map((data) => (
        data.id === id && console.log(data.name)
      ))
    }
    id === 1 && setInc1(prev => prev + 1);
    id === 2 && setInc2(prev => prev + 1);
    id === 3 && setInc3(prev => prev + 1);
    id === 4 && setInc4(prev => prev + 1);
  }

  return (
    <div >
      <h2>Shoes</h2>
      <div className='menTitle'>
        <h3>Mens Active wear Shoes</h3>
        <div className='Category1'>
          {productItems.map((productItems) => (
            <div className='items' key={productItems.id}>
              <img src={productItems.image} alt={productItems.name} />
              <h2>{productItems.name}</h2>
              <h4>{productItems.price}</h4>
              <h3>{productItems.id}</h3>
              <button onClick={() => btnHandle(productItems.id)}>-</button>
              {inc1 > -1 && productItems.id === 1 && <p>{inc1}</p>}
              {inc2 > -1 && productItems.id === 2 && <p>{inc2}</p>}
              {inc3 > -1 && productItems.id === 3 && <p>{inc3}</p>}
              {inc4 > -1 && productItems.id === 4 && <p>{inc4}</p>}
              <button onClick={() => btnPHandle(productItems.id)}>+</button>

            </div>
          ))}

          <h2>{setInc1}</h2>

        </div>

        {inc1 || inc2 || inc3 || inc4 ? <img src={cartLogo} alt="" id="cart" onClick={() => setShowForm(true)} /> : null}
        {inc1 || inc2 || inc3 || inc4 ? <p className="showCart">{increase}</p> : null}


        {showForm ? <div className="form-popup" id="myForm">
          <div classNme="form-container">
            <h2>Cart</h2>
            {!increase ? <p id="title">Your Cart is empty</p> : <span className="cartIncrease">Your cart has {increase} {increase > 1 ? 'items' : 'item'}</span>}
            <img src={logo1} alt="" className="cartImage" />
            <p className="title2">$125 x {inc1} = ${inc1 * 125}</p>

            <button id="check" onClick={() => setIncrease(0)}>Checkout</button>
            <button className="btn cancel" onClick={() => setShowForm(false)}>
              <img src={closeLogo} alt="" />
            </button>
          </div>
        </div> : null}

      </div>
    </div>
  )
}

export default Shoes