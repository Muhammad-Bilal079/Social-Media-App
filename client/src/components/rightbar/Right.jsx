import React, { useContext, useEffect, useState } from 'react'
import "./right.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';


const   user = JSON.parse(localStorage.getItem("user"))
function Right({user}) {
  const process = {
    env: {
      REACT_APP_PUBLIC_FOLDER:  'http://localhost:5173/assets/'
    }
  };
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER



  const [friends, setFriends] = useState([]);
  // const {user:currentUser , dispatch } = useContext(AuthContext);
  
  // const [followed, setFollowed] = useState(
  //   currentUser.followings.includes(user?.id)
  // );


  // useEffect(() => {
  //   const getFriends = async () => {
  //     try {
  //       const friendList = await axios.get("http://localhost:5000/api/users/friends/" + user._id);
  //       setFriends(friendList.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getFriends();
  // }, [user]);

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
        <span className="rightbarInfoValue">{user.city}</span>
        </div>

        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From : </span>
        <span className="rightbarInfoValue">{user.from}</span>
        </div>

        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship : </span>
        <span className="rightbarInfoValue">{user.relationship === 1 ? "single" :"maried" }</span>
        </div>
      </div>
      {/* user friends  */}
      <div className="rightbarTitle">User Friends</div>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
        <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>

{/* <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"http://localhost:5173/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div> */}

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {/* <Profilerightbar/> */}
        {user ?<Profilerightbar/> : <Homerightbar/> }
      </div>

    </div>
  )
}


export default Right