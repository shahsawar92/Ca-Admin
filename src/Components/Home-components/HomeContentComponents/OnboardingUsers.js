import React from 'react'
import icons from '../../../Utilities/Icons/icons'

export default function OnboardingUsers() {
  return (
    <div className="container">
    <div className="content">
      
      <div className='topflex-card'><div>
        <img className='room-img'  src={icons.UserMsg}  alt="" />
        <span style={{marginLeft:10}} className="card-title">Onboarding users</span>
      </div>
    
      <div className='topflex-background'>Details</div>
     
     </div>
    
      <div className='active'>Active</div> <p className='card-subtitle-integer'>3</p>
    
    <a href="#">Invite to onboarding</a>
    </div>
    
  </div>
  )
}
