import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Events from './pages/events'
import Contact from './pages/contact'
import About from './pages/about'
import Team from './pages/team'
import './assets/css/app.css'
require('dotenv').config()

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path = "/team" component = {Team} />
        <Route path = "/about" component = {About} />
      </div>
    </Router>
  )


ReactDOM.render( routing, document.getElementById('root'));