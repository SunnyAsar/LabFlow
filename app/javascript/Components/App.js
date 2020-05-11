import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Patients from './Patients/Patients'
import Patient from './Patients/Patient'
import AddPatient from './Patients/AddPatient'
import AddTest from './Tests/AddTest'
import AddSample from './Samples/AddSample'
import Samples from './Samples/Samples'
import Sample from './Samples/Sample'

import Aside from './Layout/Aside'
import 'simplebar/dist/simplebar.min.css'
// import './styles/app.css'

const App = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <Router>
        <div className="left-side-menu">
          <div className="sidebar-content">
            <div id="sidebar-menu" className="slimscroll-menu">
              <Aside toggle={open} />
            </div>
            <div className="clearfix" />
          </div>
        </div>

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row page-title">
                <div className="col-md-12">
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/patients" component={Patients} />
                    <Route path="/patients/:id" component={Patient} />
                    <Route exact path="/patient/new" component={AddPatient} />
                    <Route path="/tests/new" component={AddTest} />
                    <Route exact path="/samples" component={Samples} />
                    <Route path="/samples/:id" component={Sample} />
                    <Route path="/sample/new" component={AddSample} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  2020 &copy; Lab Flow. All Rights Reserved. Crafted with{' ❤️'}
                  <i className="uil uil-heart text-danger font-size-12" /> by{' '}
                  <a href="https://twitter.com/sunny_asar" target="_blank">
                    Joker
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>

      {/* <div className="App"> */}
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
      {/* <section className="container-fluid main-section">
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
        </section> */}
      {/* </div> */}
    </div>
  )
}

export default App
