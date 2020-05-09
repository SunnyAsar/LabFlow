import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSamples } from '../../Actions/sampleActions'
import { Link } from 'react-router-dom'

export class Sample extends Component {
  render () {
    return (
      <div>
        <h2>Sample Data</h2>
        <div className="row">
          <div className="card col-12">
            <div className="card-body">
              <div className="row d-flex mb-3 justify-content-between">
                <h2 className="h3 text-success">
                  <small className="text-dark">Sample ID:</small> Ngr5k1
                </h2>
                <Link>
                  <button className="btn btn-outline-primary px-3 btn-rounded">Add Result</button>
                </Link>
              </div>
              <div className="row text-center">
                <div className="col-3">
                  <h5>Samples name</h5>
                  <p>Blood</p>
                </div>
                <div className="col-3">
                  <h5>Test Performed</h5>
                  <p>Dialisis</p>
                </div>
                <div className="col-3">
                  <h5>Result Status</h5>
                  <p>Processing</p>
                </div>
                <div className="col-3">
                  <h5>Date Requested</h5>
                  <p>23rd Feb. 2020</p>
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
