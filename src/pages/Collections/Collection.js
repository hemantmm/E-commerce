import React from 'react'
import './Collections.css';
import Shoes from './Shoes/Shoes';
import Sneakers from './Sneakers/Sneakers';
import Slippers from './Slippers/Slippers';

function Collection() {
  return (
<>
    <h2 className='header'>We here welcome u to our &nbsp;<span>Sneaker</span>&nbsp; showroom</h2>

    <div className="Category">
      <div>
        <h2 >Shoes</h2>
        <h2 >Sneakers</h2>
        <h2 >Slippers</h2>
      </div>
    <Shoes />
    <Sneakers />
    <Slippers />
    </div>

    </>
  )
}

export default Collection