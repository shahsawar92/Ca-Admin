import React from 'react'
import icons from '../../../Utilities/Icons/icons'

export default function News() {
  return (
    <div className="container">
 
  <div className="content">
    
    <div className='topflex-card'><div>
      <img  className='room-img'  src={icons.repeat} alt="" />
      <span style={{marginLeft:10}} className="card-title">News</span>
    </div>
  
    <div className='topflex-background'>View All</div>
   
   </div>
   <div className='table-container'>
    <div className='table-alerts news-linespace'>
      <div className=''>
        <div className='card-subtitle '>New meeting comming soon</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts news-linespace '>
      <div className=''>
        <div className='card-subtitle '>Last meeting updates</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts news-linespace'>
      <div className=''>
        <div className='card-subtitle '>activities held today</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

    <div className='table-alerts news-linespace'>
      <div className=''>
        <div className='card-subtitle '>alert</div>
      </div>
      <div className='date-rooms  '>12 aug</div>
    </div>

  </div>
  </div>
</div>
  )
}
