import React from 'react';
import Review from './Review';
import {Link} from 'react-router-dom';

export default function UserReview() {
  return (
    <div className='user-reviews'>
      <Review
        text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.`}
        img={`img/user-1.jpg`}
        name={`Nick Smith`}
        date={`Feb 23rd, 2020`}
        rating={`7.8`}
      />
      <Review
        text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.`}
        img={`img/user-2.jpg`}
        name={`Mary Thomas`}
        date={`Sept 13th,20`}
        rating={`9.3`}
      />

      <button className='btn-inline'>
        <Link to='/All-Reviews' style={{ color: 'inherit', textDecoration: 'inherit' }}>
          Show all <span>&rarr;</span>
        </Link>
      </button>
    </div>
  );
}
