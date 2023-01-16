import React from 'react'
import Img2  from '../../Assets/img2.jpg'

function Listing() {
  return (
   
        <li>
          <img src={Img2} alt="" />
          <div className='list_heading'>
          <h3>nishi</h3>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
        </li>
      
  )
}

export default Listing