import React from 'react';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import AppContainer from './route';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <AppContainer />
      </Router>
    </div>
  );
}
