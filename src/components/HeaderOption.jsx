import { Avatar } from '@mui/material'
import React from 'react'

function HeaderOption({avatar, Icon, title }) {
  return (
    <div className='flex h-12 w-16 flex-col items-center '>
        {Icon && <Icon />}
        {avatar && <Avatar src={avatar} />}
        <h1 className='text-sm'>{title}</h1>
    </div>
  )
}

export default HeaderOption