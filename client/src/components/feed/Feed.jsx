import React, { useContext, useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
// import {Posts} from '../../dummyData'

function Feed({ username }) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  // const user = JSON.parse(localStorage.getItem("user"))
  // console.log(posts);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username ?
        await axios.get("http://localhost:5000/api/posts/profile/" + username) :
        await axios.get('http://localhost:5000/api/posts/timeline/'+ user._id)
      //  console.log(res);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    }
    fetchPost()
  }, [username,user._id])
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