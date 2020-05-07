import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { getTests, postTest } from '../../Actions/testActions'
import { connect } from 'react-redux'
import Tests from './Tests'

const validation = Yup.object({
  name: Yup.string().min(3, 'Test name must be more than 3 characters').required('Test name required'),
  amount: Yup.number().min(200, 'Test amount must be more than 200').required('Test amount required')
})
class AddTest extends Component {
  render () {
    return (
      <div>
        <h2 className="pl-2"> Add Tests </h2>
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={{
                    name: '',
                    amount: 0,
                    description: '',
                    processing_time: null
                  }}
                  validationSchema={validation}
                  onSubmit={(values, { setSubmitting, restForm }) => {
                    setSubmitting(true)
                    this, this.props.postTest({ test: values })
                    restForm(true)
                    setSubmitting(false)
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="form-group">
                        <Field name="name" className="form-control" placeholder="Test name" />
                        <ErrorMessage name="name" component="div" className="text-danger pl-2" />
                      </div>
                      <div className="form-group">
                        <Field name="amount" type="number" className="form-control" placeholder="Test amount" />
                        <ErrorMessage name="amount" component="div" className="text-danger pl-2" />
                      </div>
                      <div className="form-group">
                        <Field
                          name="description"
                          as="textarea"
                          rows="4"
                          className="form-control"
                          placeholder="Test Description"
                        />
                        <ErrorMessage name="description" component="div" className="text-danger pl-2" />
                      </div>
                      <div className="form-group pull-right">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block">
                          Add Test
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <Tests />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     tests: state.test.tests
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTests: () => dispatch(getTests()),
    postTest: (data) => dispatch(postTest(data))
  }
}

export default connect(null, mapDispatchToProps)(AddTest)
