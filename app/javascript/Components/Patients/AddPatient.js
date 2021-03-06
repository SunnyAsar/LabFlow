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

const validation = Yup.object({
  first_name: Yup.string().min(4, 'first name must be more that 4 characters').required('first name required'),
  last_name: Yup.string().min(4, 'last name must be more that 4 characters').required('last name required'),
  middle_name: Yup.string().min(4, 'middle name must be more that 4 characters'),
  phone: Yup.number().required('Phone number is required')
})

class AddPatient extends Component {
  render () {
    return (
      <div>
        <h2>Add a Patient</h2>
        <div className="row">
          <div className="col-md-6">
            <div>
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
                  const { history } = this.props
                  setSubmitting(true)
                  this.props.postPatient({ patient: values }, csrf, history)
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
                      <ErrorMessage name="last_name" component="div" className="text-danger pl-2" />
                    </div>

                    <div className="form-group">
                      <Field name="middle_name" placeholder="Middle Name" className="form-control" />
                      <ErrorMessage name="middle_name" component="div" className="text-danger pl-2" />
                    </div>
                    <div className="form-group">
                      <Field name="phone" placeholder="Phone number" className="form-control" />
                      <ErrorMessage name="phone" component="div" className="text-danger pl-2" />
                    </div>
                    <div className="form-group">
                      <Field name="email" placeholder="Email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger pl-2" />
                    </div>

                    <div className="form-group">
                      <Field
                        name="contact_address"
                        as="textarea"
                        className="form-control"
                        placeholder="Contact address - Home or office"
                        rows="6"
                      />
                      <ErrorMessage name="contact_address" className="text-danger pl-2" component="div" />
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
          </div>
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
    postPatient: (data, token, history) => dispach(PostPatient(data, token, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
