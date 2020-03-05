import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/Views/MainView';
import appRouting from './appRouting';

function App() {
  return (
    <div className='container'>    
      <Header />
      <div className='content'>
        <Sidebar />
        {appRouting}
      </div>
    </div>
  );
}

export default App;
