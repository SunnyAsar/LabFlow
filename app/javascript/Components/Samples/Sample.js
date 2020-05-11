import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSample } from '../../Actions/sampleActions'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

export class Sample extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchSample(id)
  }
  render () {
    const { sample_id, name, test_status, created_at, test_name } = this.props.sample
    return (
      <div>
        <div className="row mb-2 pl-3 align-items-center">
          <span className="mr-4">
            <Link to="/samples">
              <button className="btn btn-rounded  btn-sm btn-outline-primary"> ← Back</button>
            </Link>
          </span>
          <h3 className="text-primary h3">Sample's Data</h3>
        </div>
        <div className="row">
          <div className="card col-12">
            <div className="card-body">
              <div className="row d-flex mb-3 justify-content-between">
                <h2 className="h3 text-success">
                  <small className="text-dark">Sample ID:</small> {sample_id}
                </h2>
                <Link>
                  <button className="btn btn-outline-primary px-3 btn-rounded">Add Result</button>
                </Link>
              </div>
              <div className="row text-center">
                <div className="col-3">
                  <h6>Sample's name</h6>
                  <p className="h5 text-primary">{`${name}`.toUpperCase()}</p>
                </div>
                <div className="col-3">
                  <h6>Test Performed</h6>
                  <p className="text-primarmy h5">{`${test_name}`.toUpperCase()}</p>
                </div>
                <div className="col-3">
                  <h6>Result Status</h6>
                  <p className={`h5 text-primary`}>{`${test_status}`.toUpperCase()}</p>
                </div>
                <div className="col-3">
                  <h6>Date Requested</h6>
                  <p className="h5">{moment(`${created_at}`).format('LLL')}</p>
                </div>
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
    sample: state.sample.sample
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSample: (id) => dispatch(getSample(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
