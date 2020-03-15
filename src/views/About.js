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
          {'My name is Son. I am a software developer at '}
          <a href="https://dearlucy.co" style={{ color: '#e12a67', fontWeight: 'bold' }}>Dear Lucy</a>
          {' - located in Helsinki, Finland.'}
        </p>
        <p>
          {'At Dear Lucy, We build '}
          <b style={{ color: '#e12a67' }}>Business Intelligence dashboards </b>
          which provide accurate key performance indicator (KPI) data
          in real time and in transpent manner.  This helps leaders to
          monitor business performance and communicate easily with
          organization and interest groups.
        </p>
        <p>
          I am a supporter of the open-source movement.
          My favourite development stack is Linux, vim, git, tmux, zsh, i3wm.
        </p>
      </div>
    </div>
  </div>
);

export default About;
