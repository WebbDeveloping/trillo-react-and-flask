import React from 'react';

export default function Review(props) {
  return (
    <figure className='review'>
      <blockquote className='review__text'>{props.text}</blockquote>
      <figcaption className='review__user'>
        <img src={props.img} alt='User 1' className='review__photo' />
        <div className='review__user-box'>
          <p className='review__user-name'>{props.name}</p>
          <p className='review__user-date'>{props.date}</p>
        </div>
        <div className='review__rating'>{props.rating}</div>
      </figcaption>
    </figure>
  );
}
