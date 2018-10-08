import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

// import Home from './components/Home/Home';
import aboutme from './components/aboutMe/aboutMe';
// import portfolio from './components/portfolio/portfolio';
import HelloWorld from './components/HelloWorld/HelloWorld';
import portTwo from './components/portTwo/portTwo';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={aboutme}/>
        
       
        
        <Route path="/portTwo" component={portTwo}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
