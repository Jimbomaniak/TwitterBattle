import React, { Component } from 'react';
import './App.css';
import Popular from './Popular/Popular';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './Nav/NavBar'
import Home from './Home/Home'
import Battle from './Battle/Battle'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
