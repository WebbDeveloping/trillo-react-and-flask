import React from 'react'

export default function Recomend() {
    return (
        <div className='recommend'>
        <p className='recommend__count'>
          Lucy and 3 other friends recommend this hotel.
        </p>
        <div className='recommend__friends'>
          <img
            src='img/user-3.jpg'
            alt='Friend 1'
            className='recommend__photo'
          />
          <img
            src='img/user-4.jpg'
            alt='Friend 2'
            className='recommend__photo'
          />
          <img
            src='img/user-5.jpg'
            alt='Friend 3'
            className='recommend__photo'
          />
          <img
            src='img/user-6.jpg'
            alt='Friend 4'
            className='recommend__photo'
          />
        </div>
      </div>
    )
}
