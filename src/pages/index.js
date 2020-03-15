import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import profileLogo from '../images/field3.jpg';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container text-center">
      <a href="https://github.com/nguymin4">
        <img alt=" " className="rounded-circle" src={profileLogo} height="100" width="100" />
      </a>
      <h1>Minh Son Nguyen</h1>
      <div>
        <p>“The purpose of computing is insight, not numbers.”</p>
        <p>-Richard Hamming-</p>
      </div>
    </div>
  </Layout>
);

export default HomePage;
