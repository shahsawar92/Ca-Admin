import React from 'react'
import icons from '../../../Utilities/Icons/icons'

export default function InviteToOrg() {
  return (
    <div className="container-invite">
  <div className="content room-flex">
    <img className='room-img'  src={icons.User} alt="" />
    <div className='text-invite'>Invite people to Organization</div>
  </div>
</div>
  )
}
