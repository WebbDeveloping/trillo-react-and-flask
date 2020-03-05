import React from 'react';

export default function RatingOverview(props) {
  return (
    <div className='overview__rating'>
      <div className='overview__rating-average'>{props.average}</div>
      <div className='overview__rating-count'>{props.count} votes</div>
    </div>
  );
}
