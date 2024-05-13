import React, { useEffect, useState } from 'react'
import './profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Right from '../../components/rightbar/Right';
import Feed from '../../components/feed/Feed';
import axios from 'axios';
import { Users } from '../../dummyData';
import { useParams } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState({})

    const process = {
        env: {
            REACT_APP_PUBLIC_FOLDER: 'http://localhost:5173/assets/'
        }
    };
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    // yeah url main say username lakar dy Ga
    const username = useParams().username
    // console.log(username);

    useEffect(() => {
        const fetchuser = async () => {
            const res = await axios.get(`http://localhost:5000/api/users/?username=${username}`) //http://localhost:5000/api/users/${post.userId}
            //  console.log(res);
            setUser(res.data)
        }
        fetchuser()
    }, [username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverPicture || PF + 'person/Nocover.jpeg'} alt="" />
                            <img className='profileUserImg' src={user.profilePicture || PF + 'person/Noawatar.jpeg'} alt="" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Right user={user} />


                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile