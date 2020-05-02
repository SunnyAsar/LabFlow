import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import PatientForm from './PatientForm'
import { PostPatient } from '../../Actions/patientActions'
import axios from 'axios'

const csrf = document.querySelector('[name="csrf-token"]').content
delete axios.defaults.headers.common['X-CSRF-TOKEN']
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf

class AddPatient extends Component {
  render () {
    return (
      <div>
        <h2>Add a Patient</h2>
        <div className="row">
          <div className="col-md-6">{<PatientForm />}</div>
          <div className="col-md-6">
            <div className="pt-1 text-center">
              <h2 className="text-success">n35i60</h2>
              {/* <div>
                <span>Name:</span>
                <span>
                  <h5>Sunny Asar Terlumun</h5>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patient
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    postPatient: (data, token) => dispach(PostPatient(data, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
