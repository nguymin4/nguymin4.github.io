import React from 'react';
import { Link } from 'gatsby';

const indicators = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' }
];

const Header = () => (
  <nav id="view-indicators">
    {indicators.map(({ title, href }) => (
      <Link key={href} to={href} className="view-indicator" activeClassName="active">
        <i>{title}</i>
        <span />
      </Link>
    ))}
  </nav>
);

export default Header;
