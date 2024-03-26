import React from 'react'
import "./right.css"

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

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Ahtasham bhai</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Ahtasham bhai</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Ahtasham bhai</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Ahtasham bhai</span>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Right