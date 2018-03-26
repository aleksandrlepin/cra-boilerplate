import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default (props) => {
  return (
    <ul>
      <li>
        <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav-link" activeClassName="nav-link--active">about</NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className="nav-link" activeClassName="nav-link--active">gallery</NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className="nav-link" activeClassName="nav-link--active">contacts</NavLink>
      </li>
    </ul>
  )
}
