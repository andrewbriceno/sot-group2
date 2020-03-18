import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/glossary' component={Glossary}/>
    </Switch>
  );
}

export default Main;
