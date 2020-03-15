import React from 'react';
import SEO from '../components/SEO';
import profileLogo from '../images/field3.jpg';

const Home = () => (
  <>
    <SEO title="Home" />
    <div className="container text-center">
      <a href="https://github.com/nguymin4">
        <img alt=" " className="rounded-circle" src={profileLogo} height="100" width="100" />
      </a>
      <h3>Minh Son Nguyen</h3>
      <div>
        <p>“The purpose of computing is insight, not numbers.”</p>
        <p>-Richard Hamming-</p>
      </div>
    </div>
  </>
);

export default Home;
