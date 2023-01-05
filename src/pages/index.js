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

function App({ location }) {
  const isLoaded = useLoader();
  const getClassName = (href) => {
    const hash = location.hash || '#home';
    return classnames('view', { active: href === hash });
  };

  return (
    <>
      <div id="overlay" className={classnames({ loaded: isLoaded })}>
        <div className="loader" />
      </div>
      {isLoaded && (
        <div className="band">
          <Smokes />
          <Nav />
          <div id="content">
            <section id="home" className={getClassName('#home')}>
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
}

App.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired
  }).isRequired
};

export default App;

// Exporting a named function called Head to set the metadata for a page
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export function Head() {
  return <SEO title="Home" />;
}
