import React, { Component } from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import News from './components/News'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
