import React from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'

const App = () =>{
  return (
      <Router>
    <h1> Zacznij Pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </h1>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>

  );
}

export default App;
