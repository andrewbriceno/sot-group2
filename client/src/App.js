import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/AboutPage"
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
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/admingloss" component={AdminGlossary}/>
                <Route component={Error}/>
               </Switch>
            </div> 
        </BrowserRouter>
    );
}

export default App;
