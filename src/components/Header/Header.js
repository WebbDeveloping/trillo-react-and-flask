import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  return (
    <header className='header'>
      <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <img src={'../img/logo.png'} alt='trillo logo' className='logo' />
      </Link>
      <Search />
      <Nav />
    </header>
  );
}
