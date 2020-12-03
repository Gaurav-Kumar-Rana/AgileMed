import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ServicePage from './pages/service';

export default function AppContainer() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/service">
          <ServicePage />
        </Route>
      </Switch>
    </div>
  );
}
