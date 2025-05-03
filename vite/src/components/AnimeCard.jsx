import React from 'react'

function AnimeCard({ imageUrl = null, title, rating, summery, }) {
    return (
        <div className='flex w-full '>
            <img className='' src={imageUrl} />
            <div className=''>
                <h2 className=''>{title}</h2>
                <h3 className=''>{rating}</h3>
                <p className=''>{summery}</p>
                <div className='flex '>
                    <p>👍</p>
                    <p>⭐</p>
                    <p>🤣</p>
                    <p>🥹</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard