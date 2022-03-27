import React, { useState } from "react";

import AvatarLogo from '../src/images/cmm.png'

export default function Navbar()
{

   return(
    <>
   <nav className="navbar">
     
       
       {/* <ul id="nav_ul">
           <li>Collections</li>
           <li>Men</li>
           <li>Women</li>
           <li>About</li>
           <li>Contact</li>
       </ul> */}
       

     
      
      <img src={AvatarLogo} alt="" id="avatar" />

     <div className="underLine3" style={{border:"1px solid rgb(153,152,152)",width: "82%" , left: "10%" ,top: "15%" ,position: "absolute" ,opacity: ".5"}}></div>
    </nav>


{/* <div className="form-popup"></div> */}

    
    </>
   );
    
}

 