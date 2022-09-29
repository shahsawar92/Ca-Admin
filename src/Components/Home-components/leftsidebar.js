import React from 'react'
import "../../CSS/leftbar.css";
import icons from "../../Utilities/Icons/icons";

export default function Leftsidebar() {
  return (
    <div className='leftbar-main-contianer'>
    
        <ul className='list'>
        <li>
            <span></span>
            <span><img className='room-img1' src={icons.home} alt="" />
            Home</span>   
            
        </li>
        <li> 
        <span></span>
       <img className='room-img1' src={icons.UserSingle} alt="" />
            Manage Users
        </li>
      
         <li>
         <span></span>
         <img className='room-img1' src={icons.layout} alt="" />
            Manage Content
        </li>
        <li>
        <span></span>
        <img className='room-img1' src={icons.graph} alt="" />
            Analytics Dashboard</li>
        <li>
        <span></span>
        <img className='room-img1' src={icons.User} alt="" />
            Onboarding
        </li>

        </ul>
        <div className='leftsidebar-footer'>
            <div className='card-title'>send feedback</div>
            <a href='#'>terms and conditions</a> <br />
            <a href='#'>Privacy and Policy</a>
            <div className='copyright'>Copyright 2022 Ca Admin Panel </div>
        </div> 
    </div>
  )
}
