import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import achievements from './achievements';

const Skills = () => (
  <PerfectScrollbar options={{
    suppressScrollX: true,
    scrollYMarginOffset: 25
  }}
  >
    <div className="container">
      <div className="row">
        <h2>
          <FontAwesomeIcon className="mr-3" icon={faStar} />
          Skills
        </h2>
        <div className="skill">
          <ul>
            <li>Building data pipeline and data visualization</li>
            <li>Javascript (NodeJS, React), Python (Flask, Numpy, Pandas)</li>
            <li>PostgresSQL, MongoDB, Redis</li>
            <li>Linux, Docker, Heroku</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h2>
          <FontAwesomeIcon className="mr-3" icon={faCertificate} />
          Achievements
        </h2>
        <div className="col-md-12 achievement-list">
          {achievements.map(({ authority, logo, name, url }) => (
            <div key={url} className="achievement">
              <div className="logo">
                <img src={logo} alt={authority} title={authority} />
              </div>
              <div className="text">
                <div className="name">{name}</div>
                <a href={url}>View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PerfectScrollbar>
);

export default Skills;
