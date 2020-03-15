import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Smokes from './Smokes';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <div className="band">
    <Smokes />
    <Nav />
    <div id="content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
