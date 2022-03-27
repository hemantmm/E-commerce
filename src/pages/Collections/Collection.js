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
    <Shoes />
    <Sneakers />
    <Slippers />
    </div>

    </>
  )
}

export default Collection