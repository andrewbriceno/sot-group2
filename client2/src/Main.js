import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';
import ViewGlossaryItem from './components/ViewGlossaryItem';
import Admin from './Pages/Admin';
import Products from './Pages/Products';


import AdminGlossary from './Pages/AdminGlossary';
import AdminAddGlossary from './Pages/AdminAddGlossary';
import AdminEditGlossary from './Pages/AdminEditGlossary';

import AdminProducts from './Pages/AdminProducts';
import AdminAddProducts from './Pages/AdminAddProducts'
import AdminEditProducts from './Pages/AdminEditProducts';

import AdminUsers from './Pages/AdminUsers';
import AdminAddUser from './Pages/AdminAddUser';
import AdminEditUser from './Pages/AdminEditUser';

import PageNotFound from './Pages/PageNotFound'
import ViewProducts from './components/ViewProducts';


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/glossary' component={Glossary}/>
      <Route path='/glossary/:title' component={Glossary}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path='/products' component={Products}/>

      <Route exact path='/admin/glossary_list/' component={AdminGlossary}/>
      <Route exact path='/admin/add_glossary/' component={AdminAddGlossary}/>
      <Route exact path='/admin/edit_glossary' component={AdminEditGlossary}/>

      <Route exact path='/admin/products_list/' component={AdminProducts}/>
      <Route exact path='/admin/add_products/' component={AdminAddProducts}/>
      <Route exact path='/admin/edit_products' component={AdminEditProducts}/>

      <Route exact path='/admin/user_list/' component={AdminUsers}/>
      <Route exact path='/admin/add_user/' component={AdminAddUser}/>
      <Route exact path='/admin/edit_user/' component={AdminEditUser}/>
      <Route component={PageNotFound}/>
    </Switch>
  );
}

export default Main;
