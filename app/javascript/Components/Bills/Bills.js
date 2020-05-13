import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Bills extends Component {
  render () {
    return (
      <div>
        <h2>Bills</h2> <br />
        <div className="wrapper">
          <table className="table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#Bill </th>
                <th scope="col">Name</th>
                <th scope="col">Patient</th>
                <th scope="col">Samples Associated</th>
                <th scope="col">created</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {/* <tbody>{TableData}</tbody> */}
          </table>
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
