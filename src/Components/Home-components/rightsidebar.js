import React from 'react'
import "../../CSS/rightsidebar.css";
import icons from '../../Utilities/Icons/icons';


export default function Rightsidebar() {
  return (
    <div className='right-container-main'>
      <h2 className='heading'>Help</h2>
      <div className='text-container'>
        <img src={icons.UserMsg} alt="" className='userMsg'/>
        <h3 className='heading2-rightsidebar'>Get in touch</h3>
        <p className='p-rightsidebar'>Get in touch with out support team to help you resolve the problem</p>
      </div>
      <p></p>
    </div>
  )
}
