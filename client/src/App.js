import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/AboutPage"
import DYK from "./components/DidYouKnow"
import Forum from "./components/Forum"
import Schedule from "./components/SchedulePage"
import Glossary from "./components/Glossary"
import editGlossary from './components/editGlossary'
import Login from "./components/LoginPage"
import Admin from "./components/AdminPanel"
import './App.css';
import AdminGlossary from './components/AdminGlossary';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/didyouknow" component={DYK}/>
                    <Route path="/forum" component={Forum}/>
                    <Route path="/schedule" component={Schedule}/>
                    <Route path="/glossary" component={Glossary}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/admingloss" component={AdminGlossary}/>
                    <Route path='/editGloss' component={editGlossary}/>
                <Route component={Error}/>
               </Switch>
            </div> 
        </BrowserRouter>
    );
}

export default App;
