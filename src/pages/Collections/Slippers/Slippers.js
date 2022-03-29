import React, { useState } from 'react'

import './Slippers.css';
import cartLogo from '../../../images/icon-cart.svg'
import logo1 from '../../../images/image-product-1.jpg'
import closeLogo from '../../../images/icon-close.svg'
import SlippersData from './SlippersData';



function Slippers() {

  const [showForm, setShowForm] = useState(false)

  const [increase2, setincrease2] = useState(0)


  const { productItems } = SlippersData;

  return (
    <div >
      {/* <h2 style={{textAlign:'center'}}>Slippers</h2> */}
      <div className='menTitle'>
        <h3>Mens Active wear Slippers</h3>
        <div className='Category1'>
          {productItems.map((productItems) => (
            <div className='items'>
              <img src={productItems.image} alt={productItems.name} />
              <h2>{productItems.name}</h2>
              <h4>{productItems.price}</h4>
              <button>-</button>
              <p>{increase2}</p>
              <button onClick={() => setincrease2(increase2 + 1)}>+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slippers