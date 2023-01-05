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
            <a className="me-3" href="https://github.com/nguymin4">
              <FontAwesomeIcon size="2x" icon={faGithubSquare} />
            </a>
            <a className="me-3" href="https://www.linkedin.com/in/minhsonnguyen1209">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="col-sm-9 px-5 py-4">
          <p>
            Hello!
          </p>
          <p>
            {'My name is Son. I am a data engineer at '}
            <a href="https://meruhealth.com" style={{ color: '#5baf73', fontWeight: 'bold' }}>Meru Health</a>
            {' - in Helsinki, Finland.'}
          </p>
          <p>
            Meru Health is an online mental healthcare provider with the goal to help people
            to improve their mental health long-term by treating anxiety, depression and burnout.
            I work with both product and data science teams.
          </p>
          <p>
            My main development stack is Linux, vim, tmux, zsh, git and i3wm.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
