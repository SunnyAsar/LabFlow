import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import { getBill } from '../../Actions/billActions'
import Patient from '../Patients/Patient'
import SampleTable from '../Samples/SampleTable'

export class Bill extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchBill(id)
  }
  render () {
    const { name, patient, created_at, payment_status, samples_count, samples } = this.props.bill
    return (
      <div>
        <div className="row mb-2 pl-3 align-items-center">
          <span className="mr-4">
            <Link to="/bills">
              <button className="btn btn-rounded  btn-sm btn-outline-primary"> ← Back</button>
            </Link>
          </span>
          <h3 className="text-primary h4">Bill's Data</h3>
        </div>
        <div className="row">
          <div className="card col-12">
            <div className="card-body">
              <div className="row d-flex mb-3 justify-content-between">
                <h2 className="h5 text-success">
                  <small className="h4 text-dark mr-3">Bill:</small>
                  {name}
                </h2>
                <Link>
                  <button className="btn btn-outline-primary px-3 btn-rounded">print Bill</button>
                </Link>
              </div>
              <div className="row text-center">
                <div className="col-3">
                  <h6>Patients's name</h6>
                  <p className="h5 text-primary">{`${patient}`.toUpperCase()}</p>
                </div>
                <div className="col-3">
                  <h6>Test Performed</h6>
                  <p className="text-primarmy h5">{samples_count}</p>
                </div>
                <div className="col-3">
                  <h6>Payment Status</h6>
                  <p className={`h5 text-primary`}>{`${payment_status ? 'Yes' : 'NO'}`.toUpperCase()}</p>
                </div>
                <div className="col-3">
                  <h6>Date Created</h6>
                  <p className="h5">{moment(`${created_at}`).format('LLL')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="text-primary h4">Samples on bill</h3>
          <div className="card col-12">
            <div className="card-body">
              <div className="wrapper">{samples && <SampleTable samples={samples} />}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bill: state.bill.bill
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBill: (id) => dispatch(getBill(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
