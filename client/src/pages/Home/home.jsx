import React from 'react'
import "./home.css"
import Topbar from  "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Right from '../../components/rightbar/Right';
import Feed from '../../components/feed/Feed';



function Home() {
  return (
 <>
 <Topbar/>
 <div className="homeContainer">
  <Sidebar/>
  <Feed />
  <Right />
 </div>
 </>
  )
}

export default Home