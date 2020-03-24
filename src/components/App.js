import React from 'react';
import './css/App.css';
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {

  return (
    <Router>
      <nav className='homeNav'>
        <div  className="background"/>
        <ul>
          <li className='navli'><button><Link className='navLink' to="/">About Me</Link></button></li>
          <li className='navli'><button><Link className='navLink' to="/contact">Contact</Link></button></li>
          <li className="dropdown">
            <button className="dropdown-btn">Projects <span> &#9660;</span></button>
            <div className="dropdown-content">
              <a href="https://jademm.github.io/d3-demo/">D3 Demo</a>
              <a href="https://jademm.github.io/d3-demo/">React Pizza Ordering Menu</a>
            </div>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
