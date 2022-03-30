import React from 'react'
import LeftNavbar from './LeftNavbar.js';
import Navbar from './Navbar.js'
import RightNavbar from './RightNavbar.js'

function Home() {
  return (
    <>
      <Navbar />
      <div className='navas'>
        <div>
          <LeftNavbar />
        </div>

        <div>
          <RightNavbar />
        </div>
      </div>
    </>
  )
}

export default Home