import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import certifications from './certifications';

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
            <li>Javascript (NodeJS, React), Python (Numpy, Pandas)</li>
            <li>PostgresSQL, MongoDB, Redis</li>
            <li>Linux, Docker, Heroku</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h2>
          <FontAwesomeIcon className="mr-3" icon={faCertificate} />
          Certifications
        </h2>
        <div className="col-md-12 certification-list">
          {certifications.map(({ authority, logo, name, url }) => (
            <div key={url} className="certification d-flex justify-content-between">
              <div className="text">
                <div className="name">{name}</div>
                <a href={url}>View</a>
              </div>
              <img className="logo" src={logo} alt={authority} title={authority} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </PerfectScrollbar>
);

export default Skills;
