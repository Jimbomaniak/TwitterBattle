import React, { Component } from 'react';
import './App.css';
import Popular from './Popular/Popular';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './Nav/NavBar'
import Home from './Home/Home'
import Battle from './Battle/Battle'
import Results from "./Battle/Results/Results";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path='/TwitterBattle' component={Home} />
            <Route exact path='/TwitterBattle/battle' component={Battle} />
            <Route path='/TwitterBattle/battle/results' component={Results} />
            <Route path='/TwitterBattle/popular' component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
