import React from 'react';
import Nav from '../components/Nav';
import Smokes from '../components/Smokes';
import Home from '../views/Home';
import '../styles/index.scss';

const App = () => (
  <div className="band">
    <Smokes />
    <Nav />
    <div id="content">
      <Home />
    </div>
  </div>
);

export default App;
