import React from 'react';
import './scss/main.scss';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

const App = () =>{
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/logowanie' component={Login} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/wylogowano' component={Logout} />
        </Switch>
      </Router>

  );
}

export default App;
