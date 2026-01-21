import React from 'react'

const Table = () => {
  return (
    <div className="container my-5">
        <h3 className="mb-3">Pricing Table</h3>
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>$10</td>
              <td>Starter Pack</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>$25</td>
              <td>Advanced Features</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>$50</td>
              <td>All Access</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Table