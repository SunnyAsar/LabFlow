import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Sample = ({ sample }) => {
  return (
    <tr>
      <th scope="row" className="text-success">
        {sample.sample_id}
      </th>
      <td>{sample.name}</td>
      <td>{sample.test_name}</td>
      <td>{sample.test_status}</td>
      <td>
        <Link to={`/samples/${sample.id}`}>
          <button className="btn btn-outline-success px-3 btn-rounded btn-sm">View</button>
        </Link>
      </td>
    </tr>
  )
}

const SampleTable = ({ samples }) => {
  const TableData = samples.map((sample) => <Sample key={sample.id} sample={sample} />)

  return samples.length > 0 ? (
    <div className=" wrapper ">
      <table className="table table-striped fixed_header">
        <thead className="thead-dark ">
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
  ) : (
    <h4 className="text-center text-secondary mt-4">There are no Samples </h4>
  )
}

export default SampleTable
