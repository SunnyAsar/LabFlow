import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { PostPatient } from '../../Actions/patientActions'
import axios from 'axios'

const validation = Yup.object({
  first_name: Yup.string().min(4, 'first name must be more that 4 characters').required('first name required'),
  last_name: Yup.string().min(4, 'last name must be more that 4 characters').required('last name required'),
  middle_name: Yup.string().min(4, 'middle name must be more that 4 characters'),
  phone: Yup.number().required('Phone number is required')
})
const csrf = document.querySelector('[name="csrf-token"]').content
delete axios.defaults.headers.common['X-CSRF-TOKEN']
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf

class AddPatient extends Component {
  render () {
    return (
      <div>
        <h2>Add a Patient</h2>
        <div className="row">
          <div className="col-md-6">
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                middle_name: '',
                phone: '',
                email: '',
                contact_address: ''
              }}
              validationSchema={validation}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                this.props.postPatient({ patient: values }, csrf)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <Field name="first_name" type="text" placeholder="First Name" className="form-control" />
                    <ErrorMessage name="first_name" component="div" className="text-danger pl-2" />
                  </div>

                  <div className="form-group">
                    <Field name="last_name" placeholder="Last Name" className="form-control" />
                    <ErrorMessage name="last_name" component="div" className="text-danger" />
                  </div>

                  <div className="form-group">
                    <Field name="middle_name" placeholder="Middle Name" className="form-control" />
                    <ErrorMessage name="middle_name" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <Field name="phone" placeholder="Phone number" className="form-control" />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <Field name="email" placeholder="Email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="form-group">
                    <Field
                      name="contact_address"
                      as="textarea"
                      className="form-control"
                      placeholder="Contact address - Home or office"
                      rows="6"
                    />
                    <ErrorMessage name="contact_address" className="text-danger" component="div" />
                  </div>
                  <div className="form-group pull-right">
                    <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary btn-block">
                      Add Patient
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-6">
            <div className="pt-1 text-center">
              <h2 className="text-success">n35i60</h2>
              <div className="row">
                <div className="col-md-4">
                  <h6>Name</h6>
                </div>
                <div className="col-md">
                  <h4>Sunny Asar</h4>
                </div>
              </div>

              <div className="d-flex space-evenly">
                <span>Name:</span>
                <span>Terlumun</span>
              </div>
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
