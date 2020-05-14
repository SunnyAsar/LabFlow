import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'
import { Link } from 'react-router-dom'
import { getBills } from '../../Actions/billActions'

const Bill = ({ bill }) => {
  return (
    // <tr className={bill.payment_status ? 'table-success' : 'table-danger'}>
    <tr className="text-center">
      <td>{bill.name}</td>
      <td className="text-secondary strong h6">{bill.samples_count}</td>
      <Link to={`patients/${bill.patient_id}`}>
        <td className="text-primary strong">{bill.patient}</td>
      </Link>
      {/* <td>{bill.payment_status ? 'Yes' : 'No'}</td> */}
      {/* <td className="" className={`badge badge-pill px-5  ${bill.payment_status ? `badge-success` : 'badge-warning'}`}>
        {bill.payment_status ? 'Yes' : 'No'}
      </td> */}
      <td>
        <span className={`badge badge-pill px-4 py-2  ${bill.payment_status ? `badge-success` : 'badge-warning'}`}>
          {bill.payment_status ? 'Yes' : 'No'}
        </span>
      </td>
      <td>{moment(`${bill.created_at}`).format('LLL')}</td>
      <td>
        <Link to={`/bills/${bill.id}`}>
          <button className="btn btn-outline-success px-3 btn-rounded btn-sm">View</button>
        </Link>
      </td>
    </tr>
  )
}

export class Bills extends Component {
  componentDidMount () {
    this.props.fetchBills()
  }
  render () {
    const BillTable = this.props.bills.map((bill) => <Bill key={bill.id} bill={bill} />)
    return this.props.bills.length > 0 ? (
      <div>
        <h2>Bills</h2> <br />
        <div className="wrapper">
          <table className="table ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Patient</th>
                <th scope="col">#Samples </th>
                <th scope="col">Payment</th>
                <th scope="col">created</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{BillTable}</tbody>
          </table>
        </div>
      </div>
    ) : (
      <h4 className="text-center text-secondary mt-4">There are no Bills yet </h4>
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
