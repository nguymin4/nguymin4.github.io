import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function LoadingScreen({ isLoaded }) {
  return (
    <div id="overlay" className={classnames({ loaded: isLoaded })}>
      <div className="loader" />
    </div>
  );
}

LoadingScreen.propTypes = {
  isLoaded: PropTypes.bool.isRequired
};

export default LoadingScreen;
