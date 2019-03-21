import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from '../headerComponent/navBar.js';
import Footer from '../footerComponent/footer.js';

class aboutPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <section id="about">
            <div id="abTitle">
              <h4>CREATIVE DEVELOPER</h4>
              <h4 id="grey">Technology + Design + Art</h4>
              <h5> - Hi, I'm Rushali</h5>
            </div>
            <img></img>
            <br></br>
        <p id="left">
        I'm an engineer and artist designing, coding, building experiences with emerging technology. Currently, I am a post doc research fellow at NYU's Interactive Telecommunications program.
        <br></br>
        <br></br>
        I was part of the organizing team for processing community day in Bangalore and NYC and also help with xStory and ITPower.
        </p>

        </section>
      <Footer/>
      </div>
    )
  }
}

export default aboutPage;
