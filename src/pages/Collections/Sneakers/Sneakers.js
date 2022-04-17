import React, { useState } from 'react'

import './Sneakers.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import data from './SneakersData';

function Shoes() {

  const [showForm, setShowForm] = useState(false)
  const [increase, setIncrease] = useState(0)
  const [inc1, setInc1] = useState(0);
  const [inc2, setInc2] = useState(0);
  const [inc3, setInc3] = useState(0);
  const [inc4, setInc4] = useState(0);

  const lists = [];
  // {inc1 > -1 && productItems.id === 1 && <p>{inc1}</p>}
  //           {inc2 > -1 && productItems.id === 2 && <p>{inc2}</p>}
  //           {inc3 > -1 && productItems.id === 3 && <p>{inc3}</p>}
  //           {inc4 > -1 && productItems.id === 4 && <p>{inc4}</p>}


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
    lists.push('add', id)
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
            <div className='itemsCart' key={productItems.id}>
              <img src={productItems.image} alt={productItems.name} />
              <h2>{productItems.name}</h2>
              <h4>{productItems.price}</h4>
              {/* <h3>{productItems.id}</h3> */}
              <button onClick={() => btnHandle(productItems.id)}>-</button>
              {inc1 > -1 && productItems.id === 1 && <p>{inc1}</p>}
              {inc2 > -1 && productItems.id === 2 && <p>{inc2}</p>}
              {inc3 > -1 && productItems.id === 3 && <p>{inc3}</p>}
              {inc4 > -1 && productItems.id === 4 && <p>{inc4}</p>}
              <button onClick={() => btnPHandle(productItems.id)}>+</button>

              {/* const ids=`${productItems.id}`; */}
              {/* {incr.img2 > 0 ? <h2>{incr.img1}</h2> : <h2>{ }</h2>} */}

            </div>
          ))}

          <h2>{setInc1}</h2>

        </div>

        {inc1 || inc2 || inc3 || inc4 ? <img src={cartLogo} alt="" id="cart" onClick={() => setShowForm(true)} /> : null}
        {inc1 || inc2 || inc3 || inc4 ? <p className="showCart">1</p> : null}
        {/* {inc2 ? <p className="showCart">{inc2}</p> : null} */}


        {showForm ? <div className="form-popups" id="myForm">
          <div classNme="form-container">
            <h2 className='headerCart'>Cart</h2>
            {/* {!increase ? <p className="title">Your Cart is empty</p> : <span className="cartIncrease">Your cart has {increase} {increase > 1 ? 'items' : 'item'}</span>} */}
            <img src={logo1} alt="" className="cartImage" />
            <div className="titles">
              {/* <h2>{lists} </h2> */}
              {inc1 ? <p className="title1">$125 x {inc1} = ${inc1 * 125}</p> : null}
              {inc2 ? <p className="title2">$125 x {inc2} = ${inc2 * 125}</p> : null}
              {inc3 ? <p className="title3">$125 x {inc3} = ${inc3 * 125}</p> : null}
              {inc4 ? <p className="title4">$125 x {inc4} = ${inc4 * 125}</p> : null}
            </div>

            <button className="check" onClick={() => {
              setInc1(0);
              setInc2(0);
              setInc3(0);
              setInc4(0);
              setShowForm(false); // try to close it after 3 sec..
            }}>
              Checkout
            </button>

            <button className="btn cancelLogo" onClick={() => setShowForm(false)}>
              <img src={closeLogo} alt="" className='closeLogo' />
            </button>
          </div>
        </div> : null}

      </div>
    </div>
  )
}

export default Shoes