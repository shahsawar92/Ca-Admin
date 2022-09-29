import React from 'react'
import "./home-content.css"
import Alerts from './HomeContentComponents/Alerts'
import InviteToOnboard from './HomeContentComponents/InviteToOnboard'
import InviteToOrg from './HomeContentComponents/InviteToOrg'
import News from './HomeContentComponents/News'
import OnboardingUsers from './HomeContentComponents/OnboardingUsers'
import Rooms from './HomeContentComponents/Rooms'
import Users from './HomeContentComponents/Users'

export default function Homecontent() {
  return (
    <div className='home-container'>
<div class="home-card">
      <div class=" ">
        <Users />
      </div>
      <div class="">
        <Alerts />
      </div>
      <div class="">
        <Rooms />
      </div>
      <div class=" ">
        <OnboardingUsers />
      </div>
      <div class="">
        <News />

      </div>
      <div class="small-cards-home">
        <div>
            <InviteToOrg />
        </div>
        <div>
            <InviteToOnboard />
        </div>
      </div>
    </div>
    </div>
  )
}
