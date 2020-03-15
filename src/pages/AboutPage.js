import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="view">
      <div className="container">
        <h2>About me</h2>
        <div className="row">
          <div className="col-sm-3">
            <h3>Minh Son Nguyen</h3>
            <h4>Helsinki - Finland</h4>
            <ul id="contact">
              <li>
                <a href="https://github.com/nguymin4">
                  <i className="fa fa-github-square" />
                </a>
                <a href="https://www.linkedin.com/in/minhsonnguyen1209">
                  <i className="fa fa-lkin-square" />
                </a>
                <a href="mailto:%6d%69%6e%68.%73%6f%6e.%6e%67%75%79%65%6e.%31%32%30%39@%67%6d%61%69%6c.%63%6f%6d">
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
            <p>
              Hello and welcome to my website!
            </p>
            <p>
              {'My name is Son. I am a software developer at '}
              <a href="https://dearlucy.co" style={{ color: '#e12a67', 'font-weight': 'bold' }}>DearLucy</a>
              {' - located in Helsinki, Finland. We build '}
              <b style={{ color: '#e12a67' }}>Business Intelligence dashboards</b>
              which provide accurate key performance indicator (KPI) data
              in real time and in transpent manner.  This helps leaders to
              monitor business performance and communicate easily with
              organization and interest groups.
            </p>
            <p>
              I am a supporter of the open-source movement.
              My favourite development stack is Linux with i3wm, zsh, tmux, git, vim and VSCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
