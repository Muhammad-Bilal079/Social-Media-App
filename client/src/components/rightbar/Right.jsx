import React from 'react'
import "./right.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'

function Right({profile}) {
  const process = {
    env: {
      REACT_APP_PUBLIC_FOLDER:  'http://localhost:5173/assets/'
    }
  };
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const Homerightbar = () => {
    return (
      <>
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
      </>
    )
  }

  // profile right bar 
  const Profilerightbar = () =>{
    return(
      <>
      <div className="rightbarTitle">User information</div>
      <div className="rightbarInfo">

        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City : </span>
        <span className="rightbarInfoValue">NewYork</span>
        </div>

        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From : </span>
        <span className="rightbarInfoValue">bilal</span>
        </div>

        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship : </span>
        <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      {/* user friends  */}
      <div className="rightbarTitle">User Friends</div>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
        <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
        <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
        <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
        <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
        <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
        <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {/* <Profilerightbar/> */}
        {profile ?<Profilerightbar/> : <Homerightbar/> }
      </div>

    </div>
  )
}

export default Right