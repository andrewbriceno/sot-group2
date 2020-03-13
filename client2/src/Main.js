import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './App2';
import About from './components/About';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
    </Switch>
  );
}

export default Main;
