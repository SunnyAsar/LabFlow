import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

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
            <h2>form</h2>

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
                setTimeout(() => {
                  console.log(values)
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
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
          <div className="col-md-6">Patient Detail</div>
        </div>
      </div>
    )
  }
}

export default AddPatient
