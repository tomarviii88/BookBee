import React from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
