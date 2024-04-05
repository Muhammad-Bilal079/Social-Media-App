import React from 'react'
import './online.css'

function Online({user}) {
  // yeah env file ko acess karnay kay liay hai 
const process = {
  env: {
    REACT_APP_PUBLIC_FOLDER:  'http://localhost:5173/assets/'
  }
};

const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername"> {user.username}</span>
  </li>
  )
}

export default Online