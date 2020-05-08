import React, { Component } from 'react'

const Sample = ({ sample }) => {
  return (
    <tr>
      <th scope="row" className="text-success">
        {sample.sample_id}
      </th>
      <td>{sample.name}</td>
      <td>Test</td>
      <td>{sample.status}</td>
      <td>
        <button className="btn btn-outline-success btn-rounded btn-sm">View</button>
      </td>
    </tr>
  )
}

const SampleTable = ({ samples }) => {
  const TableData = samples.map((sample) => <Sample sample={sample} />)
  return (
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
  )
}

export default SampleTable
