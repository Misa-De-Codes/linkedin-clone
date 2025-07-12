import React from 'react'

function InputOptions({ Icon, title, color }) {
  return (
    <div className='flex items-center mb-3'>
        <Icon style={{color: color}} />
        <h4 className='ml-1'>{title}</h4>
    </div>
  )
}

export default InputOptions