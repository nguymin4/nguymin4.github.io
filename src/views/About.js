import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="container">
      <h2>About me</h2>
      <div className="row">
        <div className="col-sm-3">
          <h3>Minh Son Nguyen</h3>
          <h4>Helsinki - Finland</h4>
          <div id="contact">
            <a className="me-3" href="https://github.com/nguymin4" aria-label="github">
              <FontAwesomeIcon size="2x" icon={faGithubSquare} />
            </a>
            <a className="me-3" href="https://www.linkedin.com/in/minhsonnguyen1209" aria-label="linkedin">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="col-sm-9 px-5 py-4">
          <p>
            Hello!
          </p>
          <p>
            {'My name is Son. I am a data engineer working on Big Data and MLOps at '}
            <a href="https://elisa.com">Elisa Oyj</a>
            {' in Helsinki, Finland'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
