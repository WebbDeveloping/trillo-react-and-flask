import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [activeHotel, setActiveHotel] = useState(false);
  const [activeFlight, setActiveFlight] = useState(false);
  const [activeRental, setActiveRental] = useState(false);
  const [activeTours, setActiveTours] = useState(false);
  const applyClass = type => {
    if (type == 'Hotel') {
      setActiveHotel(true);
      setActiveFlight(false);
      setActiveRental(false);
      setActiveTours(false);
    } else if (type == 'Flight') {
      setActiveHotel(false);
      setActiveFlight(true);
      setActiveRental(false);
      setActiveTours(false);
    } else if (type == 'Rental') {
      setActiveRental(true);
      setActiveFlight(false);
      setActiveHotel(false);
      setActiveTours(false);
    } else if (type == 'Tours') {
      setActiveTours(true);
      setActiveRental(false);
      setActiveFlight(false);
      setActiveHotel(false);
    }
  };
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li
          onClick={() => applyClass('Hotel')}
          className={`side-nav__item ${
            activeHotel ? `side-nav__item--active` : 'not-active'
          }`}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-home'}></use>
            </svg>
            <Link
              to='/'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span>Hotel</span>
            </Link>
          </a>
        </li>
        <li
          onClick={() => applyClass('Flight')}
          className={`side-nav__item ${
            activeFlight ? `side-nav__item--active` : 'not-active'
          }`}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-aircraft-take-off'}></use>
            </svg>
            <Link
              to='/FlightView'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span>Flight</span>
            </Link>
          </a>
        </li>
        <li
          onClick={() => applyClass('Rental')}
          className={`side-nav__item ${
            activeRental ? `side-nav__item--active` : 'not-active'
          }`}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-key'}></use>
            </svg>
            <Link
              to='/Car-Rentals'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span>Car rental</span>
            </Link>
          </a>
        </li>
        <li
          onClick={() => applyClass('Tours')}
          className={`side-nav__item ${
            activeTours ? `side-nav__item--active` : 'not-active'
          }`}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-map'}></use>
            </svg>
            <Link
              to='/Browse-tours'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span>Tours</span>
            </Link>
          </a>
        </li>
      </ul>

      <div className='legal'>&copy; 2020 by trillo. All rights reserved.</div>
    </nav>
  );
}
