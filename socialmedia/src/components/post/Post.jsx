import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

function Post({ post }) {
const [like , setLike] = useState(post.like)
const [Isliked , setIsliked] = useState(false)

const likeHandler = ()=>{
    setLike(Isliked ? like-1 : like+1)
    setIsliked(!Isliked)
}
    return (
        <div className='post'>

            <div className="postWrapper">
                {/* top area  */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                {/* post center area  */}
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
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