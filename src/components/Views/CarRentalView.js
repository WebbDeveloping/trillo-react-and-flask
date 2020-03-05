import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview/Overview';
import UserReview from './Reviews/UserReview';
import Description from '../Description';
const car1 = 'https://images.unsplash.com/photo-1567524197295-23f5015bdb36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
const car2 = 'https://images.unsplash.com/photo-1574629227604-eb01be71451a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
const car3 = 'https://images.unsplash.com/photo-1566746797342-636568f219f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'


export default function CarRentalView() {
  return (
    <main className='main-view'>
      <Gallery img1={car1} img2={car2} img3={car3} />
      <Overview name={`Car Rentals`} />
      <div className='detail'>
        <Description type={'rental'} />
        <UserReview />
      </div>
    </main>
  );
}
