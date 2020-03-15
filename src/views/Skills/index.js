import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../components/SEO';
import achievements from './achievements';

const Skills = () => (
  <>
    <SEO title="Skills" />
    <div className="container">
      <div className="row">
        <h2>
          <FontAwesomeIcon className="mr-3" icon={faChevronCircleDown} />
          Skills
        </h2>
        <div className="skill">
          <ul>
            <li>Building data pipeline and data visualization</li>
            <li>Javascript (NodeJS, React), Python</li>
            <li>PostgresSQL, MongoDB, Redis</li>
            <li>Linux, Docker, Heroku</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h2>
          <FontAwesomeIcon className="mr-3" icon={faChevronCircleDown} />
          Achievements
        </h2>
        <div className="col-md-12 achievement-list">
          {achievements.map(({ authority, logo, name, url }) => (
            <div className="achievement">
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
  </>
);

export default Skills;
