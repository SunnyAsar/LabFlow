import React, { Component } from 'react'
import { getTests } from '../../Actions/testActions'
import { connect } from 'react-redux'
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validation = Yup.object({
  patient_id: Yup.string()
    .min(6, "Patient ID can't be less than 6 characters")
    .max(6, "Patient ID can't be more than 6 characters")
    .required('Patient ID is required')
})

class AddSample extends Component {
  state = {
    patient_id: '',
    values: null
  }
  componentDidMount () {
    this.props.fetchTests()
  }
  render () {
    const selectOptions = this.props.tests.map((test, index) => (
      <option key={test.id} value={test.id}>
        {test.name}
      </option>
    ))
    return (
      <div>
        <h2>Add Sample</h2>

        <div className="row">
          <div className="col-md-8">
            <Formik
              initialValues={{
                patient_id: this.state.total ? this.state.total : '',
                samples: [
                  {
                    name: '',
                    test_id: '',
                    id: '' + Math.random()
                  }
                ]
              }}
              validationSchema={validation}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                }, 500)
                resetForm(true)
              }}
              onChange={(values) => {
                alert(values)
              }}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <Field name="patient_id" placeholder="Patient unique ID" className="form-control" />
                    <ErrorMessage name="patient_id" component="div" className="text-danger pl-2" />
                  </div>
                  <FieldArray name="samples">
                    {(arrayHelpers) => (
                      <div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm mb-3"
                          onClick={() => arrayHelpers.push({ name: '', test_id: '', id: '' + Math.random() })}
                        >
                          Add Sample
                        </button>
                        {values.samples.map((sample, index) => {
                          return (
                            <div className="row" key={index}>
                              <div className=" col-md-5 form-group">
                                <Field
                                  name={`samples.${index}.name`}
                                  placeholder="Sample name"
                                  className="form-control"
                                />
                              </div>
                              <div className=" col-md-5 form-group">
                                <Field as="select" name={`samples.${index}.test_id`} className="form-control">
                                  <option value="" disabled selected>
                                    Select a test
                                  </option>
                                  {selectOptions}
                                </Field>
                              </div>

                              <div className="col-md-2 form-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-danger p-1 "
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </FieldArray>
                  <div className="form-group pull-right">
                    <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary btn-block">
                      Submit Samples
                    </button>
                  </div>

                  {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  {/* <pre>{JSON.stringify(values)}</pre> */}
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="">Bill</h2>
            <h1 className="text-info">{this.state.total}</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tests: state.test.tests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTests: () => dispatch(getTests())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSample)
