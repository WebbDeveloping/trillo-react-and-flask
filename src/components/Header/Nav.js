import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='user-nav'>
      <div className='user-nav__icon-box'>
        <svg className='user-nav__icon'>
          <use xlinkHref={'img/sprite.svg#icon-bookmark'}></use>{' '}
        </svg>
        <span className='user-nav__notification'>7</span>
      </div>
      <div className='user-nav__icon-box'>
        <svg className='user-nav__icon'>
          <use xlinkHref={'img/sprite.svg#icon-chat'}></use>
        </svg>
        <span className='user-nav__notification'>13</span>
      </div>
      <div className='user-nav__user'>
        <Link
          to='/Dashboard'
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <img
            src='img/user.jpg'
            alt='User photo'
            className='user-nav__user-photo'
          />
        </Link>
        <span className='user-nav__user-name'>Jonas</span>
      </div>
    </nav>
  );
}
