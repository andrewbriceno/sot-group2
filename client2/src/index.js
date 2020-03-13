import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import routes from './routes'
import * as serviceWorker from './serviceWorker';
import AboutPage from './components/About';


// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <Router routes={routes} history={HashRouter} />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root')
);

// import App from './App';

// export default (
//   <Route path="/" component={App}>
//     <Route path="/about" component={AboutPage} />
//   </Route>
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
