import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';
import Admin from './Pages/Admin';
import AdminGlossary from './Pages/AdminGlossary';
import AdminAddGlossary from './Pages/AdminAddGlossary';
import AdminEditGlossary from './Pages/AdminEditGlossary';


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/glossary' component={Glossary}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/admin/glossary_list/' component={AdminGlossary}/>
      <Route exact path='/admin/add_glossary/' component={AdminAddGlossary}/>
      <Route exact path='/admin/edit_glossary' component={AdminEditGlossary}/>
    </Switch>
  );
}

export default Main;
