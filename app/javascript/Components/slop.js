import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Patients from './Patients/Patients'
import Patient from './Patients/Patient'
import AddPatient from './Patients/AddPatient'
import AddTest from './Tests/AddTest'
import AddSample from './Samples/AddSample'
import Samples from './Samples/Samples'

import SideBar from './Layout/SideBar'
import './styles/app.css'

const slop = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <div className="App">
        {/* <button
          className="material-icons material-icons--outlined toggle-btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          menu
        </button> */}
        <section className="container-fluid main-section">
          <main className="main-area">
            <Router>
              <SideBar toggle={open} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/patients" component={Patients} />
                <Route path="/patient/:id" component={Patient} />
                <Route path="/patients/new" component={AddPatient} />
                <Route path="/tests/new" component={AddTest} />
                <Route exact path="/samples" component={Samples} />
                <Route path="/samples/new" component={AddSample} />
              </Switch>
            </Router>
          </main>
        </section>
      </div>
    </div>
  )
}

export default slop
