import React, { useState, useEffect } from 'react';
import Recomend from './Views/Overview/Recomend';

export default function Description(props) {
  const [hotelDetails, setHotelDetails] = useState([]);
  const [rentalDetails, setRentalDetails] = useState([]);
  const [flightDetails, setFlightDetails] = useState([]);

  useEffect(() => {
    fetch('/hotel-details')
      .then(res => res.json())
      .then(data => {
        setHotelDetails(data);
      });
  }, []);

  useEffect(() => {
    fetch('/rental-details')
      .then(res => res.json())
      .then(data => {
        setRentalDetails(data);
      });
  }, []);

  useEffect(() => {
    fetch('/flight-details')
      .then(res => res.json())
      .then(data => {
        setFlightDetails(data);
      });
  }, []);
  /////////
  // I dont think this is the best way of doing this
  /////////
  var details = [];
  if (props.type == 'hotel') {
    details = hotelDetails.details
      ? hotelDetails.details.map((val, index, self) => {
          return (
            <li className='list__item' key={index}>
              {val}
            </li>
          );
        })
      : null;
  } else if (props.type == 'rental') {
    details = rentalDetails.details
      ? rentalDetails.details.map((val, index, self) => {
          return (
            <li className='list__item' key={index}>
              {val}
            </li>
          );
        })
      : null;
  } else if (props.type == 'flights') {
    details = flightDetails.details
      ? flightDetails.details.map((val, index, self) => {
          return (
            <li className='list__item' key={index}>
              {val}
            </li>
          );
        })
      : null;
  }
  return (
    <div className='description'>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className='paragraph'>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className='list'>{details}</ul>
      <Recomend />
    </div>
  );
}
