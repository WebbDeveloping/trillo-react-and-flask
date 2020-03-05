import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview/Overview';
import UserReview from './Reviews/UserReview';
import Description from '../Description';

export default function CarRentalView() {
  return (
    <main className='main-view'>
      <Gallery img3={`img/hotel-1.jpg`} img1={`img/hotel-2.jpg`} img2={`img/hotel-3.jpg`} />
      <Overview name={`Car Rentals`} />
      <div className='detail'>
        <Description />
        <UserReview />
      </div>
    </main>
  );
}
