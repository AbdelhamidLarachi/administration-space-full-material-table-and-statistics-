import React, { Component, RootComponent } from 'react'
import Album from './Album';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
     
    <Router>
      <Switch>
      <Route exact path="/" component={Album}>
      </Route>
      </Switch>
    </Router>

    )
  }
}
