import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function ToursView() {
  const [currentName, setCurrentName] = useState('hello');
  const [currentTour, setCurrentTour] = useState([]);
  useEffect(() => {
    fetch('/name')
      .then(res => res.json())
      .then(data => {
        setCurrentName(data.name);
      });
  }, []);
  useEffect(() => {
    fetch('/Tour')
      .then(res => res.json())
      .then(data => {
        setCurrentTour(data);
      });
  }, []);

  const mappedTours = currentTour.tours
    ? currentTour.tours.map(v => {
      return(
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
              <button class='btn btn--block card__btn'>{currentName}</button>
            </div>
          </div>
      </li>);
      })
    : null;
  return (
    <ul class='cards'>
    {mappedTours}
    </ul>
  );
}
