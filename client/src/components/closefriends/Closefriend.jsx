import React from 'react'
import './closefriend.css'

function Closefriend({user}) {
// yeah env file ko acess karnay kay liay hai 
const process = {
  env: {
    REACT_APP_PUBLIC_FOLDER:  'http://localhost:5173/assets/'
  }
};

const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (

    <li className="sidebarFriend">
    <img src={PF+user.profilePicture} alt="error" className='sidebarFiendImg' />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}

export default Closefriend