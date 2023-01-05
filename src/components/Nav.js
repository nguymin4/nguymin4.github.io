import React from 'react';
import { Link } from 'gatsby';

const indicators = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' }
];

const isActive = (href) => ({ location }) => {
  const hash = location.hash || '#home';
  const className = hash === href ? 'view-indicator active' : 'view-indicator';
  return { className };
};

function Nav() {
  return (
    <nav id="view-indicators">
      {indicators.map(({ title, href }) => (
        <Link
          key={href}
          to={href}
          getProps={isActive(href)}
          className="view-indicator"
        >
          <i>{title}</i>
          <span />
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
