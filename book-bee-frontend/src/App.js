import React from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/explore' component={ExplorePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
