import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {

    const recentItem = (topic) => {
        return <div className="opacity-75 py-0.5 hover:opacity-100 ">
            <p><span>#{topic}</span></p>
        </div>
    }

  return (
    <div className='hidden sticky top-17 h-fit self-start md:flex flex-col flex-1/5 min-w-[200px] max-w-[300px] md:ml-10 mt-20 '>
        <div className='mb-3 rounded-2xl p-5 bg-gray-50 shadow-md'>
            <div className='flex flex-col items-center mb-2 p-1.5 border-b-1 '>
                <img src='toy' alt='' ></img>
                <Avatar className='mb-4 ' src='https://i.pravatar.cc/120' />
                <h2 className='font-bold '>Sushi Chan</h2>
                <h4 className=''>susie@gmail.com</h4>
            </div>
            <div>
                <div className="flex items-center justify-between text-sm ">
                    <p>3,734<span className='font-bold opacity-75'> followers</span></p>
                    <p>385<span className='font-bold opacity-75'> following</span></p>
                </div >
            </div>
        </div>

        <div className='rounded-2xl p-5 bg-gray-50 shadow-md'>
        <h3 className='font-bold'>Recents</h3>
        {recentItem('react.js')}
        {recentItem('typescript')}
        {recentItem('software')}
        {recentItem('nodejs')}
        {recentItem('gpt')}
        {recentItem('webdev')}
        </div>
    </div>
  )
}

export default Sidebar