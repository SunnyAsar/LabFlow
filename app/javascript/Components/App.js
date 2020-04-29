import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Patients from './Patients/Patients'
import Patient from './Patients/Patient'
import AddPatient from './Patients/AddPatient'
import AddTest from './Tests/AddTest'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/patients" component={Patients} />
            <Route path="/patient/:id" component={Patient} />
            <Route path="/patients/new" component={AddPatient} />
            <Route path="/tests/new" component={AddTest} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
