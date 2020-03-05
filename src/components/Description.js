import React from 'react';
import Recomend from './Views/Overview/Recomend';

export default function Description() {
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
      <ul className='list'>
        <li className='list__item'>Close to the beach</li>
        <li className='list__item'>Breakfast included</li>
        <li className='list__item'>Free airport shuttle</li>
        <li className='list__item'>Free wifi in all rooms</li>
        <li className='list__item'>Air conditioning and heating</li>
        <li className='list__item'>Pets allowed</li>
        <li className='list__item'>We speak all languages</li>
        <li className='list__item'>Perfect for families</li>
      </ul>
      <Recomend />
    </div>
  );
}
