import React from 'react'
import './profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Right from '../../components/rightbar/Right';
import Feed from '../../components/feed/Feed';

function Profile() {
    const process = {
        env: {
          REACT_APP_PUBLIC_FOLDER:  'http://localhost:5173/assets/'
        }
      };
      
      const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt="" />
                        <img className='profileUserImg' src={`${PF}person/1.jpeg`}alt="" />
                        </div>
                       
                       <div className="profileInfo">
                        <h4 className="profileInfoName">Bilal</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                       </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Right profile={Profile}/>
                       
                            
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile