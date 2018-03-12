import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import './index.css';
import logo from '../../images/movie-logo.png';


const Header = ({navBarItems}) => {
  const img = <img src={logo} style={{width: '80px'}}/>;
  return (
    <header>
      <Navbar brand={img} right>
        {navBarItems.map(item => (
          <li key={item.title}>
            <NavLink exact to={item.path} activeClassName="nav-link--active" >
              {item.title}
            </NavLink>
          </li>))}
      </Navbar>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    navBarItems: state.navBarItems
  }
}

export default connect(mapStateToProps, null)(Header);

{/* <NavItem href={item.path} key={item.title}> {item.title} </NavItem> */}