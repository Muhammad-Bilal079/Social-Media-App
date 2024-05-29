import React, { useContext, useRef, useState } from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import { AuthContext } from '../../context/AuthContext.jsx'
import axios from "axios";

function Share() {
    const process = {
        env: {
            REACT_APP_PUBLIC_FOLDER: 'http://localhost:5173/assets/'
        }
    };
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    // const user = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem("user"))
    const [file, setFile] = useState(null);
    const desc = useRef();

    const submitHandler =async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        try {
            await axios.post(" http://localhost:5000/api/posts", newPost);
            window.location.reload();
          } catch (err) {}

        }

        return (
            <div className='share'>

                <div className="shareWrapper">
                    <div className="shareTop">
                        <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/Noawatar.jpeg'} alt="" className="shareProfileImg" />
                        <input
                            placeholder={'what is in your mind ' + user.username + '?'}
                            className="shareInput"
                            ref={desc}
                        />

                    </div>
                    <hr className='shareHr' />

                    <form className="shareBottom" onSubmit={submitHandler}>
                        <label htmlFor='file' className="shareOptions">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{ display: 'none' }} type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>

                        <div className="shareOptions">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className="shareOptions">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>

                        <div className="shareOptions">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                        <button className="shareButton" type='submit'>share</button>
                    </form>

                </div>

            </div>
        )
    }

    export default Share