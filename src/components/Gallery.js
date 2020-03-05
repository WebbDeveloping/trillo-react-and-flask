import React from 'react';
export default function Gallery(props) {
  return (
    <div className='gallery'>
      <figure className='gallery__item'>
        <img
          src={props.img1}
          alt='Photo of hotel 1'
          className='gallery__photo card__image'
        />
      </figure>
      <figure className='gallery__item'>
        <img
          src={props.img2}
          alt='Photo of hotel 2'
          className='gallery__photo'
        />
      </figure>
      <figure className='gallery__item'>
        <img
         src={props.img3}
          alt='Photo of hotel 3'
          className='gallery__photo'
        />
      </figure>
    </div>
  );
}
