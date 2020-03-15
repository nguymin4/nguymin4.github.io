import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Nav from '../components/Nav';
import Smokes from '../components/Smokes';
import SEO from '../components/SEO';
import Home from '../views/Home';
import About from '../views/About';
import Skills from '../views/Skills';
import '../styles/index.scss';

const useLoader = () => {
  const [isLoaded, hideLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => hideLoader(true), 250);
  }, []);
  return isLoaded;
};

const App = ({ location: { hash } }) => {
  const isLoaded = useLoader();
  const getClassName = (href) => (
    classnames('view', { active: href === hash })
  );

  return (
    <>
      <SEO title="Home" />
      <div id="overlay" className={classnames({ loaded: isLoaded })}>
        <div className="loader" />
      </div>
      {isLoaded && (
        <div className="band">
          <Smokes />
          <Nav />
          <div id="content">
            <section id="home" className={getClassName('')}>
              <Home />
            </section>
            <section id="about" className={getClassName('#about')}>
              <About />
            </section>
            <section id="skills" className={getClassName('#skills')}>
              <Skills />
            </section>
          </div>
        </div>
      )}
    </>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired
  }).isRequired
};

export default App;
