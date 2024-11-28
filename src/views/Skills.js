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
              <li>Building and operating Big Data and Machine Learning systems</li>
              <li>
                Big data: Apache Beam (Dataflow), Apache Flume, Apache Kafka,
                Google Pub/Sub, BigQuery, Bigtable
              </li>
              <li>MLOps: VertexAI, Apache Airflow etc.</li>
              <li>IaC Terraform on GCP, Ansible</li>
              <li>Python (Numpy, Pandas, Tensorflow etc.)</li>
              <li>Typescript (NodeJS, React, React Native, GraphQL)</li>
              <li>Other languages: Bash, Go, Java</li>
              <li>PostgresSQL, MongoDB, Redis, Firebase</li>
              <li>CI/CD, Linux, Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
  );
}

export default Skills;
