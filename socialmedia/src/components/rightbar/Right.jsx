import React from 'react'
import "./right.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'

function Right() {
  return (
    <div className='rightbar'>

      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>sufyan</b> and <b>3 others have a birthday today</b></span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u)=>(
            <Online  key={u.id} user={u}/>
          ))}
         

          

        </ul>
      </div>

    </div>
  )
}

export default Right