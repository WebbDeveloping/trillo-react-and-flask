import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from '../Description';
export default function ToursView() {
  const [currentTour, setCurrentTour] = useState([]);
  useEffect(() => {
    fetch('/Tour')
      .then(res => res.json())
      .then(data => {
        setCurrentTour(data);
      });
  }, []);
  const mappedTours = currentTour.tours
    ? currentTour.tours.map(v => {
        return (
          <li class='cards__item'>
            <div class='card'>
              <div
                class='card__image card__image--fence'
                style={{
                  backgroundImage: `${v.img}`
                }}
              ></div>
              <div class='card__content'>
                <div class='card__title'>{v.location}</div>
                <p class='card__text'>{v.description}</p>
                <button class='btn btn--block card__btn'>Book Now</button>
              </div>
            </div>
          </li>
        );
      })
    : null;
  return (
    <div className='tours-page'>
      <ul class='cards'>{mappedTours}</ul>
      <Description type={"flights"}/>
    </div>
  );
}
