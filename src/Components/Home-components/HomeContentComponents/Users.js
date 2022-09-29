import React from 'react'
import icons from '../../../Utilities/Icons/icons'
import './home.css'


export default function () {
  return (
<div className="container">
  <div className="content">
    
    <div className='topflex-card'><div>
    <img className='room-img'  src={icons.UserSingle}  alt="" />
        <span style={{marginLeft:10}} className="card-title">Users</span>

    </div>
  
    <div className='topflex-background'>Manage</div>
   
   </div>
  
    <div className='active'>Active</div> <p className='card-subtitle-integer'>31</p>
  
  <a href="#">Add User</a>
  </div>
  
</div>
  )
}
