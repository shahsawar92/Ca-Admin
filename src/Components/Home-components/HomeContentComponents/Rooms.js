import React from 'react'
import icons from '../../../Utilities/Icons/icons'

export default function Rooms() {
  return (
    <div className="container">
  <div className="content">
  <div className='topflex-card'><div>
          <img className='room-img' src={icons.room} alt="" />
      <span style={{marginLeft:10}} className="card-title">Rooms</span>
    </div>
    </div>
    <div className='table-container'>
    <div className='table-alerts'>
      <div className=''>
        <div className='card-subtitle'>Main Hall</div>
        <div className='discription'>no of screens : 05</div>
      </div>
      <a  href="#" className='date-rooms  '>view</a>
    </div>
  </div>
  </div>
  
</div>
  )
}
