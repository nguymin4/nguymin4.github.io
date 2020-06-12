import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => (
  <div className="container">
    <h2>About me</h2>
    <div className="row">
      <div className="col-sm-3">
        <h3>Minh Son Nguyen</h3>
        <h4>Helsinki - Finland</h4>
        <div id="contact">
          <a className="mr-3" href="https://github.com/nguymin4">
            <FontAwesomeIcon size="2x" icon={faGithubSquare} />
          </a>
          <a className="mr-3" href="https://www.linkedin.com/in/minhsonnguyen1209">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="col-sm-9">
        <p>
          Hello!
        </p>
        <p>
          {'My name is Son. I am a backend engineer at '}
          <a href="https://ultimate.ai" style={{ color: '#284d68', fontWeight: 'bold' }}>Ultimate.ai</a>
          {' - in Helsinki, Finland.'}
        </p>
        <p>
          At Ultimate.ai, we build customer service automation platform with deep learning technology
          which helps businesses scale their customer service.
        </p>
        <p>
          I am a supporter of the open-source movement.
          My development stack is Linux, vim, tmux, zsh, git, i3wm.
        </p>
      </div>
    </div>
  </div>
);

export default About;
