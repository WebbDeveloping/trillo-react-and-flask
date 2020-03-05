import React from 'react'

export default function Location(props) {
    return (
        <div className='overview__location'>
        <svg className='overview__icon-location'>
          <use xlinkHref={'img/sprite.svg#icon-location-pin'}></use>
        </svg>
        <button className='btn-inline'>{props.location}</button>
      </div>
    )
}
