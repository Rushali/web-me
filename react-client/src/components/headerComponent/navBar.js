import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="/projectsPage"><span>Projects</span></Link></li>
          <li className="navButton"><Link to="/aboutPage"><span>About</span></Link></li>
          <li className="navButton"><a href="https://medium.com/@rushali"><span>Blog</span></a></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
