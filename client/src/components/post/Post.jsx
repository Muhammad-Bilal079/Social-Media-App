import React, { useEffect, useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { format } from 'timeago.js'
// timeago.js help karta hai time batanay main aky post kitni dair pehlay upload hoi hai 

// yeah env file ko acess karnay kay liay hai 
const process = {
    env: {
        REACT_APP_PUBLIC_FOLDER: 'http://localhost:5173/assets/'
    }
};

const PF = process.env.REACT_APP_PUBLIC_FOLDER

function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [Isliked, setIsliked] = useState(false)
    const [user, setUser] = useState({})

    // console.log(post.userId);
    useEffect(() => {
        const fetchuser = async () => {
            const res = await axios.get(`http://localhost:5000/api/users/${post.userId} `)
             console.log(res);
            setUser(res.data)
        }
        fetchuser()
    }, [post.userId])

    const likeHandler = () => {
        setLike(Isliked ? like - 1 : like + 1)
        setIsliked(!Isliked)
    }
    return (
        <div className='post'>

            <div className="postWrapper">
                {/* top area  */}

                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img className='postProfileImg' src={user.profilePicture || PF + 'person/Noawatar.jpeg'} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                {/* post center area  */}
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post.img} alt="" />
                </div>
                {/* post bottom area  */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} peoples</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post