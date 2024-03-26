import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

function Post() {
    return (
        <div className='post'>

            <div className="postWrapper">
                {/* top area  */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Bilal</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                {/* post center area  */}
                <div className="postCenter">
                    <span className="postText">Hi , its my first post</span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                {/* post bottom area  */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 peoples</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">22 comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post