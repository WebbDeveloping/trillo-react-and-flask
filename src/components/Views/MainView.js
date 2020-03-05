import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview/Overview';
import UserReview from './Reviews/UserReview';
import Description from '../Description';

export default function MainView() {
  return (
    <main className='main-view'>
      <Gallery img1={`img/hotel-1.jpg`} img2={`img/hotel-2.jpg`} img3={`img/hotel-3.jpg`} />
      <Overview name={`Hotel Las Palmas`} />
      <div className='detail'>
        <Description />
        <UserReview />
      </div>
    </main>
  );
}
