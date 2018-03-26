import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../images/movie-logo.png';


const Header = ({ navBarItems }) => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img src={logo} style={{ width: '80px' }} alt="" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* {navBarItems.map(item => (
            <li key={item.title}>
              <NavLink exact to={item.path} activeClassName="nav-link--active" >
                {item.title}
              </NavLink>
            </li>))} */}
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  navBarItems: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  navBarItems: state.navBarItems,
});


export default connect(mapStateToProps, null)(Header);
