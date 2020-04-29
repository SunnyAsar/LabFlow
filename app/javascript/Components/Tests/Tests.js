import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTests } from '../../Actions/testActions'

class Tests extends Component {
  componentDidMount () {
    this.props.fetchTests()
  }
  render () {
    const TestList = this.props.tests.map((test, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{test.name}</td>
          <td>{test.amount}</td>
          <td>
            <button className="btn btn-success btn-sm">view</button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table class="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Test Name</th>
              <th scope="col">Cost</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{TestList}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tests: state.test.tests
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTests: () => dispatch(getTests())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tests)
