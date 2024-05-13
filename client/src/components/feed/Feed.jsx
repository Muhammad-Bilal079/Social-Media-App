import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
// import {Posts} from '../../dummyData'

function Feed({ username }) {
  const [posts, setPosts] = useState([])
  // console.log(posts);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username ?
        await axios.get("http://localhost:5000/api/posts/profile/" + username) :
        await axios.get('http://localhost:5000/api/posts/timeline/65ef89ce0ae4314fdd711660')
      //  console.log(res);
      setPosts(res.data)
    }
    fetchPost()
  }, [username])
  //  console.log(posts);

  return (
    <div className='feed'>

      <div className="feedWrapper">
        <Share />
        {posts?.map((p) => (
          <Post key={p._id} post={p} />
        ))}



      </div>
    </div>
  )
}

export default Feed