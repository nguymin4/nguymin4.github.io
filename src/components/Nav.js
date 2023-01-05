import React from 'react';
import { Link } from 'gatsby';

const indicators = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' }
];

const isPartiallyActive = (href) => ({ location: { hash } }) => {
  const isActive = hash === href || (!hash && href === '#');
  const className = isActive ? 'view-indicator active' : 'view-indicator';
  return { className };
};

function Nav() {
  return (
    <nav id="view-indicators">
      {indicators.map(({ title, href }) => (
        <Link
          key={href}
          to={href}
          getProps={isPartiallyActive(href)}
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
