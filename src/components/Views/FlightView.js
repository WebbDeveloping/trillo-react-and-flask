import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview/Overview';
import UserReview from './Reviews/UserReview';
import Description from '../Description';

export default function FlightView() {
  return (
    <main className='main-view'>
      <Gallery img1={`img/flight-1.jpg`} img2={`img/flight-2.jpg`} img3={`img/flight-4.jpeg`} />
      <Overview name={`Flight page`} />
      <div className='detail'>
        <Description />
        <UserReview />
      </div>
    </main>
  );
}
