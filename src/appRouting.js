import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './components/Views/MainView';
import FlightView from './components/Views/FlightView';
import CarRentalView from './components/Views/CarRentalView';
import Dashboard from './components/Views/Dashboard/Dashboard';
import AllReviews from './components/Views/Reviews/AllReviews';
import ToursView from './components/Views/ToursView';

export default (
  <Switch>
    <Route path='/FlightView' component={FlightView} />
    <Route path='/Dashboard' component={Dashboard} />
    <Route path='/Car-Rentals' component={CarRentalView} />
    <Route path='/All-Reviews' component={AllReviews} />
    <Route path='/Browse-tours' component={ToursView} />
    
    <Route path='/' component={MainView} />
  </Switch>
);
