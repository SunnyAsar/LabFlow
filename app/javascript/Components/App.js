import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Patients from './Patients/Patients'
import Patient from './Patients/Patient'
import AddPatient from './Patients/AddPatient'
import AddTest from './Tests/AddTest'
import AddSample from './Samples/AddSample'
import Samples from './Samples/Samples'

import Sidebar from './Layout/Sidebar'
import 'simplebar/dist/simplebar.min.css'
// import './styles/app.css'

const App = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <Router>
        <div class="left-side-menu">
          <div class="sidebar-content">
            <div id="sidebar-menu" className="slimscroll-menu">
              {/* <Sidebar toggle={open} /> */}
            </div>
            <div class="clearfix" />
          </div>
        </div>

        <div class="content-page">
          <div class="content">
            <div class="container-fluid">
              <div class="row page-title">
                <div class="col-md-12">
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/patients" component={Patients} />
                    <Route path="/patient/:id" component={Patient} />
                    <Route path="/patients/new" component={AddPatient} />
                    <Route path="/tests/new" component={AddTest} />
                    <Route exact path="/samples" component={Samples} />
                    <Route path="/samples/new" component={AddSample} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>

          <footer class="footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  2020 &copy; Lab Flow. All Rights Reserved. Crafted with{' ❤️'}
                  <i class="uil uil-heart text-danger font-size-12" /> by{' '}
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
