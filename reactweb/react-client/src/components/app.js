import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import aboutPage from './pages/aboutPage.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route name="home" exact path="/" component={HomePage} />
          <Route name="aboutPage" path="/aboutPage" component={aboutPage} />

        </div>
      </Router>
    )
  }
}

export default App;
