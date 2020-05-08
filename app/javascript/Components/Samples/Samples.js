import React, { Component } from 'react'
import { getSamples } from '../../Actions/sampleActions'
import { connect } from 'react-redux'
import SampleTable from './SampleTable'

class Samples extends Component {
  componentDidMount () {
    this.props.fetchSamples()
  }
  render () {
    return (
      <div>
        <h2> Samples</h2>
        <div>{<SampleTable samples={this.props.samples} />}</div>
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
