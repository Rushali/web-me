import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to=""><span>Projects</span></Link></li>
          <li className="navButton"><Link to=""><span>About</span></Link></li>
          <li className="navButton"><Link to=""><span>Blog</span></Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
