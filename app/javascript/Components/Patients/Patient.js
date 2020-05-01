import React, { Component } from 'react'

class Patient extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
  }
  render () {
    return (
      <div>
        <h2>Patient</h2>h
      </div>
    )
  }
}

export default Patient
