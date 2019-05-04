import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import UnderConstruction from './pages/UnderConstruction'
import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={UnderConstruction} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
