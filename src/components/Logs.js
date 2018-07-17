import React from 'react'
import PropTypes from 'prop-types'

const Logs = ({top5}) => (
  <div>
    <table>
      <thead>
        <th>IP</th><th>Counter</th>
      </thead>
      <tbody>
      {top5.statIp.map((host, i) =>
        <tr key={i}><td>{host.key}</td><td>{host.value}</td></tr>
      )}
      </tbody>
    </table>

    <table>
      <thead>
        <th>IP</th><th>Counter</th>
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
  logs: PropTypes.array.isRequired
}

export default Logs
