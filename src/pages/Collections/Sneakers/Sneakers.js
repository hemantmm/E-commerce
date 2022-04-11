import React, { useState } from 'react'


import './Sneakers.css';
// import cartLogos from '../../../images/icon-cart.svg'
import cartLogos from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import SneakersData from './SneakersData';



function Sneakers() {
  
  const [showForms, setshowForms] = useState(false)
  const [incr1, setincr1] = useState(0);
  const [incr2, setincr2] = useState(0);
  const [incr3, setincr3] = useState(0);
  const [incr4, setincr4] = useState(0);

  const lists=[];
  const { productItems } = SneakersData;

  const btnHandle = (id) => {
    console.log('sub', id)
    {
      productItems.map((data) => (
        data.id === id && console.log(data.name)
      ))
    }
    id === 1 && setincr1(prev => prev - 1);
    id === 2 && setincr2(prev => prev - 1);
    id === 3 && setincr3(prev => prev - 1);
    id === 4 && setincr4(prev => prev - 1);
  }

  const btnPHandle = (id) => {
    lists.push('add',id)
    console.log('add', id)
    {
      productItems.map((data) => (
        data.id === id && console.log(data.name)
      ))
    }
    id === 1 && setincr1(prev => prev + 1);
    id === 2 && setincr2(prev => prev + 1);
    id === 3 && setincr3(prev => prev + 1);
    id === 4 && setincr4(prev => prev + 1);
  }

  return (
    <div >
      <h2>Sneakers</h2>
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
              
              <button onClick={() => btnPHandle(productItems.id)}>+</button>


            </div>
          ))}

          <h2>{setincr1}</h2>

        </div>

        {/* {incr1 || incr2 || incr3 || incr4 ? <img src={cartLogos} alt="" className="carts" onClick={() => setshowForms(true)} /> : null} */}
        <img src={cartLogos} alt="" className="carts" onClick={() => setshowForms(true)} />
        {/* {incr1 || incr2 || incr3 || incr4 ? <p className="showCarts">{incr1}</p> : null} */}
        <p className="showCarts">{incr1}</p>
        {incr2 ? <p className="showCart">{incr2}</p> : null}
        {/* <h2>hello</h2> */}


        {showForms ? <div className="form-popups" id="myForm">
          <div classNme="form-container">
            <h2 className='headerCart'>Cart</h2>

            <img src={logo1} alt="" className="cartImage" />
            <div className="titles">

            {incr1>0?<p className="title1">$125 x {incr1} = ${incr1 * 125}</p>:null}
           {incr2 ? <p className="title2">$125 x {incr2} = ${incr2 * 125}</p> :null}
            {incr3?<p className="title3">$125 x {incr3} = ${incr3 * 125}</p>:null}
            {incr4?<p className="title4">$125 x {incr4} = ${incr4 * 125}</p>:null}
            </div>


            <button className="check" onClick={() => setincr1(0)}>Checkout</button>
            <button className="btn cancelLogo" onClick={() => setshowForms(false)}>
              <img src={closeLogo} alt="" className='closeLogo' />
            </button>
          </div>
        </div> : null}

      </div>
    </div>
  )
}

export default Sneakers