import React from 'react'
import './closefriend.css'

function Closefriend({user}) {
  return (

    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="error" className='sidebarFiendImg' />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}

export default Closefriend