import React, { useContext } from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

function Topbar() {
  const process = {
    env: {
      REACT_APP_PUBLIC_FOLDER: 'http://localhost:5173/assets/'
    }
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const user = useContext(AuthContext);

  console.log(user.username);

  return (
    <div className='topbarcontainer'>
      <div className="topbarLeft">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Mernify</span>
        </Link>
      </div>


      <div className="topbarCenter">
        <div className="searchBar">
          <Search />
          <input placeholder='Search for friends.....' className="searchInput" />
        </div>
      </div>


      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconitem">
            <Person />
            <span className='topbariconBadge'>1</span>
          </div>

          <div className="topbarIconitem">
            <Chat />
            <span className='topbariconBadge'>2</span>
          </div>

          <div className="topbarIconitem">
            <Notifications />
            <span className='topbariconBadge'>1</span>
          </div>
        </div>
        {/* <Link to={`http://localhost:5173/profile/${user.username}`}> */}
        <img src={user.profilePicture ? user.profilePicture : PF + 'person/Noawatar.jpeg'} alt="" className='topbarImg' />
        {/* </Link> */}
      </div>


    </div>
  )
}

export default Topbar