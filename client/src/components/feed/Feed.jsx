import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
// import {Posts} from '../../dummyData'

function Feed() {
  const [posts ,setPosts] = useState([])

  useEffect(()=>{
    const fetchPost = async()=>{
     const res = await axios.get('posts/timeline/65ef89de0ae4314fdd711662')
     console.log(res);
    }
    fetchPost()
  },[])


  return (
    <div className='feed'>

      <div className="feedWrapper">
        <Share/>
        {/* {Posts.map((p)=>(
              <Post key={p.id} post={p}/>
        ))} */}
      
        
        
      </div>
    </div>
  )
}

export default Feed