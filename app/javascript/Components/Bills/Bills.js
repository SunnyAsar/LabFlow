import React, { Component } from 'react'
import { connect } from 'react-redux'
import BillTable from './BillTable'

import { getBills } from '../../Actions/billActions'

class Bills extends Component {
  componentDidMount () {
    this.props.fetchBills()
  }
  render () {
    return (
      <div>
        <h2>Bills</h2>
        <div className="card">
          <div className="card-body">{<BillTable bills={this.props.bills} />}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bills: state.bill.bills
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBills: () => dispatch(getBills())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
