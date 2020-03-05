import React from 'react';

export default function Stars(props) {
  return (
    <div className='overview__stars'>
      <svg className='overview__icon-star'>
        <use xlinkHref={'img/sprite.svg#icon-star'}></use>
      </svg>
      <svg className='overview__icon-star'>
        <use xlinkHref={'img/sprite.svg#icon-star'}></use>
      </svg>
      <svg className='overview__icon-star'>
        <use xlinkHref={'img/sprite.svg#icon-star'}></use>
      </svg>
      <svg className='overview__icon-star'>
        <use xlinkHref={'img/sprite.svg#icon-star'}></use>
      </svg>
      <svg className='overview__icon-star'>
        <use xlinkHref={'img/sprite.svg#icon-star'}></use>
      </svg>
    </div>
  );
}
