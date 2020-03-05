import React from 'react';
import Cta from '../Cta/Cta';
import Recomend from '../Overview/Recomend';

export default function Dashboard() {
  return (
    <div className='description' style={{ height: '95vh' }}>
      <h1>Welcome to Dashboard</h1>
      <div className='space-between'>
        <img
          src='img/user.jpg'
          alt='User photo'
          className='user-nav__user-photo--dashboard'
        />
        <br />
        <h1 className='paragraph padding-left '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </h1>
      </div>
      <form className='list'>
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
        <input className='list__item' placeholder='name' />
      </form>
      <div className='cta'>
        <button className='btn'>
          <span className='btn__visible'>Book now</span>
          <span className='btn__invisible'>Only 4 rooms left</span>
        </button>
      </div>
      <Recomend />
    </div>
  );
}
