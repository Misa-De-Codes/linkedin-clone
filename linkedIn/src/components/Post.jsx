import { Avatar } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';


function Post( { name, email, message, photoUrl, isLiked=false, isBooked=false, } ) {
  return (
    <div className='mb-3 p-10 bg-gray-50 rounded-2xl shadow-md '>
       <div className="flex items-center">
            <Avatar src={photoUrl} />
            <div className='ml-2 mb-3'>
                <h2 className='font-bold text-sm text-gray-800'>{name}</h2>
                <p className='text-xs opacity-75 '>{email}</p>
            </div>
       </div>
       <hr className='border-gray-400 '></hr>
        <div className="pt-5 pb-2">
            <p>{message}</p>
        </div>
        <div className="flex justify-evenly mt-5">
            {isLiked? <FavoriteIcon /> : <FavoriteBorderIcon />}
            <CommentIcon />
            {isBooked? <BookmarkIcon /> : <BookmarkBorderIcon />}
            <ShareIcon />
        </div>
    </div>
  )
}

export default Post