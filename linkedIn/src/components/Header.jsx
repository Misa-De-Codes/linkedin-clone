import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';



export default function Header() {
  return (
    <div className='fixed top-0 left-0 w-screen md:justify-between flex h-15 shadow-md z-50 rounded-xl px-10 md:px-1 lg:px-18 bg-white'>
        <div className='flex overflow-hidden items-center gap-2 md:gap-0 '>
            <img className='w-32 lg:w-46 rounded-3xl' src='https://www.logoai.com/uploads/output/2025/02/17/f1b7316259aeff8e8216c607e9daf5e2.jpg' alt='imagelogo'></img>

            <div className='flex items-center lg:ml-10 ml-3 px-3 bg-gray-200 rounded-2xl hover:outline hover:rounded-2xl hover:outline-gray-500 '>
                <SearchIcon />
                <input className='h-10 w-52 md:w-25 lg:w-100 px-1.5 text-xl outline-0' placeholder='Search' type="text" />
            </div>

        </div>
        <div  className='fixed bottom-0 left-0 w-screen md:w-125 md:static flex justify-evenly pt-3 md:pt-0 items-center bg-gray-50 rounded-2xl'>

            <HeaderOption Icon={HomeIcon} title={"Home"} />
            <HeaderOption Icon={GroupIcon} title={"Network"} />
            <HeaderOption Icon={WorkIcon} title={"Job"} />
            <HeaderOption Icon={MessageIcon} title={"Message"} />
            <HeaderOption Icon={NotificationsIcon} title={"Notification"} />
            <HeaderOption avatar={"https://preview.redd.it/jwt31su4etx41.jpg?auto=webp&s=d476b90c8b5c8aac1baba165f3f6c05254b6ea04"} />
        </div> 
        

    </div>
  )
}
