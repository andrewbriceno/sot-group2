import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import AboutPage from './components/About';

export default (
  <Route path="/" component={App}>
    <Route path="/about" component={AboutPage} />
  </Route>
);
