import React from 'react'
import "./sidebar.css"
import {
  Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined,
  RssFeed, School, WorkOutline
} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <div className="sidebarButton">Show more..</div>
        <hr className='sidebarHr' />

        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="error" className='sidebarFiendImg' />
            <span className="sidebarFriendName">Jan Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="error" className='sidebarFiendImg' />
            <span className="sidebarFriendName">Jan Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="error" className='sidebarFiendImg' />
            <span className="sidebarFriendName">Jan Doe</span>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Sidebar