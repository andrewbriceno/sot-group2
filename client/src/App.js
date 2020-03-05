import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/AboutPage"
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                <Route component={Error}/>
               </Switch>
            </div> 
        </BrowserRouter>
    );
}

export default App;
