import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import certifications from './certifications';

function Skills() {
  return (
    <PerfectScrollbar options={{
      suppressScrollX: true,
      scrollYMarginOffset: 25
    }}
    >
      <div className="container">
        <div className="row">
          <h2>
            <FontAwesomeIcon className="me-3" icon={faStar} />
            Skills
          </h2>
          <div className="skill">
            <ul>
              <li>Building, operating and monitoring data/ML systems</li>
              <li>Python, Typescript (NodeJS, React, React Native, GraphQL)</li>
              <li>PostgresSQL, MongoDB, Redis</li>
              <li>
                Terraform, Google Cloud Platform: Composer (Airflow), BigQuery, Cloud Function etc.
              </li>
              <li>CI/CD, Linux, Docker</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h2>
            <FontAwesomeIcon className="me-3" icon={faCertificate} />
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
}

export default Skills;
