import React, { Component } from 'react'
import { getPatient } from '../../Actions/patientActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Patient extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchPatient(id)
  }
  render () {
    const { first_name, last_name, middle_name, phone, email, contact_address, pid } = this.props.patient
    return (
      <div>
        <span className="mr-4">
          <Link to="/patients">
            <button className="btn btn-rounded  btn-sm btn-outline-primary"> ← Back</button>
          </Link>
        </span>
        <h2 className="text-primary">Patient</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="text-success h2 bold text-center"> {pid}</h2>
                <div className="row d-flex justify-content-cente p-2">
                  <span className="h6 label pr-4">Name:</span>
                  <span className="h5 flex-end">
                    {first_name} {last_name} {middle_name ? middle_name : '---'}
                  </span>
                </div>
                <div className="row d-flex justify-content-cente p-2">
                  <span className="h6 label pr-4">Phone:</span>
                  <span className="h5 flex-end">{phone}</span>
                </div>
                <div className="row d-flex justify-content-cente p-2">
                  <span className="h6 label pr-4">Email:</span>
                  <span className="h5 flex-end">{email ? email : '---'}</span>
                </div>
                <div className="row d-flex justify-content-cente p-2">
                  <span className="h6 label pr-4">Address:</span>
                  <span className="h5">{contact_address ? contact_address : '---'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h2 className="h4 text-center text-primary"> Patient Stats </h2>
                <div className="row text-center justify-content-around">
                  <div className="col-4 border border-primary">
                    <p className="h4 text-dark">Samples</p>
                    <h1 className="text-primary"> 30</h1>
                  </div>
                  <div className="col-4 border border-warning">
                    <p className="h4 text-secondary">Unpaid Bill</p>
                    <h1 className="text-danger">0</h1>
                  </div>
                  {/* <div className="col"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPatient: (id) => dispatch(getPatient(id))
  }
}
const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
