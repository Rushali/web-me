import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from '../headerComponent/navBar.js';
import Footer from '../footerComponent/footer.js';



class projectsPage extends Component {
  render() {
    return (

      <div id="projectsPage">
  <NavBar/>
        <h1>Projects</h1>
          <section  id="card">
            <Link to="/projectsPage">
            <h4>NYC Beats</h4>
            <img id="proimage" src={require('../../../dist/assets/nyc1.jpg')}></img>
            <p>NYC Beats is a web art experiment about New York City’s iconic subway musicians.
            <br></br>
            <br></br>
              Digital Ocean, MapboxGL, Three.js, Google Firebase, Node.js, jQuery <br></br>
              </p>
            </Link>
          </section>
          <section id="card">
            <Link to="/projectsPage">
            <h4>Silent Words</h4>
            <img id="proimage" src={require('../../../dist/assets/sw1.jpg')}></img>
            <p>Silent Words is a public art installation meant to spread awareness about the extent of abuse,
              harassment and violence of sexual nature happening in a community.
              <br></br>
              <br></br>
              Node.js, Twilio API, Python, Flask <br></br></p>
            </Link>
          </section>
          <section id="card">
            <a href="http://humansoftomorrow.solutions/">
            <h4>Humans of Tomorrow</h4>
            <img id="proimage" src={require('../../../dist/assets/human1.jpg')}></img>
            <p>A website for an exhibit on solutions for climate change as part of Global Action for Climate Summit
              held in San Francisco, CA
              <br></br>
              <br></br>
              HTML, CSS, jQuery, GH-Pages <br></br>
            </p></a>
          </section>
          <section id="card">
            <h4> Fangirl Twitter Bot</h4>
            <img id="proimage" src={require('../../../dist/assets/bot1.jpg')}></img>
            <p>The twitter bot goes through an array of phrases most associated with Indian stand up comedian
              Kanan Gill and pretends to be his fangirl.
              <br></br>
              <br></br>
              Node.js, twit  <br></br> </p>
          </section>
          <br></br>
  <Footer/>
      </div>

    )
  }
}

export default projectsPage;
