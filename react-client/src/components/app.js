import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
            <Route name="home" exact path="/" component={HomePage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;