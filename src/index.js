import React ,{ Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '../src/components/Loader'
import './assets/css/app.css'
require('dotenv').config()
const Home = lazy(() => import('./pages/home'));
const Events = lazy(() => import('./pages/events'));
const Team = lazy(() => import('./pages/team'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));

const routing = (
  
    <Router>
    <Suspense fallback={Loader}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path = "/team" component = {Team} />
        <Route path = "/about" component = {About} />
        </Switch>
      </Suspense>
    </Router>

  )


ReactDOM.render( routing, document.getElementById('root'));