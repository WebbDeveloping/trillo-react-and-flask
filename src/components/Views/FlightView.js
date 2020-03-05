import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview/Overview';
import UserReview from './Reviews/UserReview';
import Description from '../Description';
const fly1 = 'https://images.unsplash.com/photo-1581108346058-2a4438b1c924?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80'
const fly2 = 'https://images.unsplash.com/photo-1582563771974-872709b01085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
const fly3 = 'https://images.unsplash.com/photo-1574100413746-9428b41d2398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

export default function FlightView() {
  return (
    <main className='main-view'>
      <Gallery img1={fly1} img2={fly2} img3={fly3} />
      <Overview name={`Flight page`} />
      <div className='detail'>
        <Description type={'flights'} />
        <UserReview />
      </div>
    </main>
  );
}
