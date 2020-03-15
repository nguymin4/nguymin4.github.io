import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SkillsView = () => (
  <Layout>
    <SEO title="Skills" />
    <section className="view">
      <div className="container">
        <div className="row">
          <h2>
            <i className="fa fa-chevron-circle-down" />
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
            <i className="fa fa-chevron-circle-down" />
            Achievements
          </h2>
          <div className="col-md-12 achievement-list" />
        </div>
      </div>
    </section>
  </Layout>
);

export default SkillsView;
