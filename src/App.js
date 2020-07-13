import React, { Component, RootComponent } from 'react'
import SignIn from './SignIn';
import AdminSpace from './AdminSpace';
import Survey from './survey';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
     
    <Router>
      <Switch>
      <Route exact path="/" component={SignIn}>
      </Route>
      <Route component={RootComponent}>
      <Route exact path="/adminspace" component={AdminSpace}>
      </Route>
    <Route exact path="/survey/:id" component={Survey}>
      </Route>
      </Route>
      </Switch>
    </Router>

    )
  }
}