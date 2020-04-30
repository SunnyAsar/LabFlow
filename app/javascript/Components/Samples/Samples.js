import React, { Component } from 'react'

export class Samples extends Component {
  render () {
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
            {/* <tbody>{TableData}</tbody> */}
          </table>
        </div>
      </div>
    )
  }
}

export default Samples
