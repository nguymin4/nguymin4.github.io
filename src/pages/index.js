import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import About from '../views/About';
import Home from '../views/Home';
import LoadingScreen from '../components/LoadingScreen';
import Nav from '../components/Nav';
import SEO from '../components/SEO';
import Skills from '../views/Skills';
import Smokes from '../components/Smokes';
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
      <LoadingScreen isLoaded={isLoaded} />
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
  return <SEO title="Home" description="" />;
}
