import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

class AddPatient extends Component {
  render () {
    return (
      <div>
        <h2>Add AddPatient</h2>

        <div classNamerow>
          <div className="col-md-6">
            <h2>form</h2>
          </div>
          <div className="col-md-6">Patient Detail</div>
        </div>
      </div>
    )
  }
}

export default AddPatient
