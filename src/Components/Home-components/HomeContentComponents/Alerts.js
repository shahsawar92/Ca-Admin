import React from 'react'
import icons from '../../../Utilities/Icons/icons'

export default function Alerts() {
  return (
    <div className="container">
 
  <div className="content">
    
    <div className='topflex-card'><div>

      <img className='room-img' src={icons.notification} alt="" />
      <span style={{marginLeft:10}} className="card-title">Alerts</span>
    </div>
  
    <div className='topflex-background'>View All</div>
   
   </div>
   <div className='table-container'>
    <div className='table-alerts'>
      <div className=''>
        <div className='card-subtitle'>alert</div>
        <div className='discription'>description</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts'>
      <div className=''>
        <div className='card-subtitle'>alert</div>
        <div className='discription'>description</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts'>
      <div className=''>
        <div className='card-subtitle'>alert</div>
        <div className='discription'>description</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts'>
      <div className=''>
        <div className='card-subtitle'>alert</div>
        <div className='discription'>description</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

  </div>
  </div>
</div>
  )
}
