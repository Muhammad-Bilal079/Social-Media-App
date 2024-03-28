import React from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@mui/icons-material';

function Topbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarLeft">
        <span className='logo'>bilalSocial</span>
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
            <Person/>
            <span className='topbariconBadge'>1</span>
          </div>

          <div className="topbarIconitem">
            <Chat/>
            <span className='topbariconBadge'>2</span>
          </div>

          <div className="topbarIconitem">
            <Notifications/>
            <span className='topbariconBadge'>1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
      </div>


    </div>
  )
}

export default Topbar