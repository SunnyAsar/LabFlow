import React, { Component } from 'react'
import { getSamples } from '../../Actions/sampleActions'
import { connect } from 'react-redux'

export class Samples extends Component {
  componentDidMount () {
    this.props.fetchSamples()
  }
  render () {
    const TableData = this.props.samples.map((sample) => {
      return (
        <tr>
          <th scope="row" className="text-success">
            {sample.sample_id}
          </th>
          <td>{sample.name}</td>
          <td>Test</td>
          <td>{sample.status}</td>
          <td>
            <button className="btn btn-success btn-sm">View</button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <h2> Samples</h2>
        <div>
          <table class="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#Sample ID</th>
                <th scope="col">Sample Taken</th>
                <th scope="col">Test Performed</th>
                <th scope="col">Status</th>
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
    samples: state.sample.samples
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSamples: () => dispatch(getSamples())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Samples)
