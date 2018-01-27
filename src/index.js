import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
          <Router>

          <Switch>

            <Route exact path='/' component={App}/>
        </Switch>
      </Router>
    </div>
  )

}

ReactDOM.render(<Root />
  , document.getElementById('root'));
registerServiceWorker();
