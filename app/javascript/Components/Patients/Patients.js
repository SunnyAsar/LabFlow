import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPatients } from '../../Actions/patientActions'

const Patient = ({ patient }) => {
  return (
    <tr>
      <th scope="row" className="text-success">
        {patient.pid}
      </th>
      <td>{patient.first_name}</td>
      <td>{patient.last_name}</td>
      <td>{patient.phone}</td>
      <td>
        <Link to={`/patients/${patient.id}`} className="btn px-3 btn-sm btn-rounded btn-outline-success">
          View
        </Link>
      </td>
    </tr>
  )
}

class Patients extends Component {
  componentDidMount () {
    this.props.fetchPatients()
  }

  render () {
    const TableData = this.props.patients.map((patient) => <Patient key={patient.id} patient={patient} />)
    return (
      <div>
        <h2>Patients</h2> <br />
        <div className="wrapper">
          <table className="table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#Patient ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{TableData}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patient.patients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPatients: () => dispatch(getPatients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients)
