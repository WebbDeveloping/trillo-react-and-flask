import React from 'react';
import Stars from './Stars';
import Location from './Location';
import RatingOverview from './RatingOverview';

export default function Overview(props) {
  return (
    <div className='overview'>
      <h1 className='overview__heading'>{props.name}</h1>
      <Stars starCount={5} />
      <Location location={`Albufeira, Portugal`} />
      <RatingOverview average={`8.6`} count={`429`} />
    </div>
  );
}
