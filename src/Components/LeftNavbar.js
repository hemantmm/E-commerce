import React, { useState } from "react";
import Images from '../Constants/Images'

import nextLogo from "../images/icon-next.svg";
import prevLogo from "../images/icon-previous.svg";

export default function LeftNavbar() {
   const[selectedImg , setSelectedImg]=useState(Images[0])

return(
   <div className="Apps">
      <div className="containers">
<img src={selectedImg} alt="selected" className="selected"/>
<div className="imgContainer">
   {Images.map((img,index)=>(
      <img 
      style={{border: selectedImg ===img ? "4px solid purple":""}}
       key={index} 
       src={img}
        alt="shoe" 
        onClick={()=>setSelectedImg(img)}
        />
   ))}
</div>
      </div>
   </div>
)



//   const img = [logo1, logo2, logo3, logo4];
//   const [show, setShow] = useState(img[0]);
//   return (
//     <>
//       <div className="mainBody">
      

//         <img src={show} />
//         <div className="thumbnailImages">
//           <img src={thumbnailLogo1} alt=""  />
//           <img src={thumbnailLogo2} alt="" />
//           <img src={thumbnailLogo3} alt="" />
//           <img src={thumbnailLogo4} alt="" />
//         </div>
//       </div>

//       <img src={nextLogo} alt="" id="next" onClick={() => {}} />
//       <img src={prevLogo} alt="" id="previous" onClick={() => {}} />
//     </>

}
