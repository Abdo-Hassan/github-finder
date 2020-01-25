import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-dark'>
      <Link to='/' style={{ margin: 'auto' }}>
        <h1>
          <i className={icon} style={{ marginRight: 10 }} />
          {title}
        </h1>
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
