import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDasboard } from '../../Actions/dashboardActions'

class Dashboard extends Component {
  componentDidMount () {
    this.props.fetchDash()
  }
  render () {
    return (
      <div>
        <h2> Dashboard </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counts: state.dashboard.counts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDash: () => dispatch(getDasboard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
