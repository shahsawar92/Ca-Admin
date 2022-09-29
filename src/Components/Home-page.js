import React from 'react'
import Homecontent from './Home-components/homecontent'
import Leftsidebar from './Home-components/leftsidebar'
import Rightsidebar from './Home-components/rightsidebar'
import "../CSS/home.css"

export default function Home() {
  return (
    <div className='main-home '>
       <div className='left-home'>
            <Leftsidebar />
        </div>
        <div className='center-home'>
            <Homecontent />
        </div>
        <div className='right-home'>
            <Rightsidebar />
        </div>
    </div>
  )
}
