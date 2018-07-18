import React from 'react'
import PropTypes from 'prop-types'

const Logs = ({top5}) => (
  <div>
      <h1>LOG statistics</h1>
      <h3>Statistics for the most active client</h3>
    <table>
      <thead>
        <tr><th>Client</th><th>Number of requests</th></tr>
      </thead>
      <tbody>
      {top5.statIp.map((host, i) =>
        <tr key={i}><td>{host.key}</td><td>{host.value}</td></tr>
      )}
      </tbody>
    </table>

    <h3>Statistics for the most requested file</h3>
    <table>
      <thead>
        <tr><th>File name</th><th>Number of requests</th></tr>
      </thead>
      <tbody>
      {top5.statFile.map((file, i) =>
        <tr key={i}><td>{file.key}</td><td>{file.value}</td></tr>
      )}
      </tbody>
    </table>
  </div>
)

Logs.propTypes = {
  top5: PropTypes.object.isRequired
}

export default Logs
