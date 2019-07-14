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
              <h4>CREATIVE TECHNOLOGIST</h4>
              <h4 id="grey">Technology + Design + Art</h4>
              <h5> - Hi, I'm Rushali</h5>
            </div>
            <img></img>
            <br></br>
        <p id="left">
        I'm an engineer & artist designing, coding, building experiences with emerging technology.
        Currently, I am a software something at start up named Unleash Labs in Santa Monica, CA.
        Previously, I worked as a post doc research fellow at New York University's
        <a href="https://itp.nyu.edu">Interactive Telecommunications program.</a>
        </p>
        <h4>Workshops and Talks</h4>
        <ul id="left">
          <li>- Processing Community Day, Mumbai,IN - Rapid prototyping with p5.js</li>
          <li>- Processing Community Day, Bangalore,IN - Intro to ml5 along w/ Mathura Govindarajan</li>
          <br></br>
          <br></br>
          <li>ITP Residency</li>
          <li>- Node & npm w/ Koji Kanao</li>
          <li>- Github 101 w/ Jasmine Soltani</li>
          <li>- How to CNC w/ Sebastian Morales</li>
        </ul>
        <h4>Community</h4>
        <ul id="left">
            <li>- ITP Rube Goldberg 2018 & 2019</li>
            <li>- ITPower 2017 - 2019</li>
            <li>- Processing Community Day NYC & Bangalore 2019</li>
            <li>- ITP's xStory 2018-19</li>
        </ul>
        <h4>Festivals, Conferences & Exhibitions</h4>
        <ul id="left">
            <li>- Alliance of women in media arts & technology, UCSB</li>
            <li>- Coal+Ice Solutions Zone</li>
            <li>- Fake News Horror Show - NYC Media Lab</li>
            <li>- ITP Spring show 2018</li>
            <li>- ITP Winter show 2017</li>
            <li>- ITP Spring show 2017</li>
            <li>- ITP Winter show 2016</li>
        </ul>

        <h4>Press</h4>
        <ul id="left">
          <li>- Columbia Journalism Review</li>
          <li>- Coding train livestream</li>
          <li>- Make list</li>
        </ul>
        <h4>Awards</h4>
        <p id="left">
          Tisch School of the Arts Graduate Scholarship
        </p>
        </section>
      <Footer/>
      </div>
    )
  }
}

export default aboutPage;
