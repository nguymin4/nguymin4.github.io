import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
              <li>Building and operating ML systems</li>
              <li>Big data: Apache Beam (Dataflow), Apache Flume, Bigtable, BigQuery</li>
              <li>
                Terraform, Google Cloud Platform: Composer (Airflow), Cloud Run etc.
              </li>
              <li>Python, Typescript (NodeJS, React, React Native, GraphQL)</li>
              <li>PostgresSQL, MongoDB, Redis</li>
              <li>CI/CD, Linux, Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
  );
}

export default Skills;
