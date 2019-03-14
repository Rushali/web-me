import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
      <ul id="home">
        <li ><span><Link to="/projectsPage">Projects</Link></span></li>
        <br></br>
        <li ><span><Link to="/aboutPage">About</Link></span></li>
        <br></br>
        <li ><span><Link to="/blogPage">Blog</Link></span></li>
  </ul>


      </div>
    )
  }
}

export default HomePage;
