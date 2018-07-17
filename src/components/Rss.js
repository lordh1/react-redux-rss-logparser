import React from 'react'
import PropTypes from 'prop-types'

const Rss = ({rss}) => (
  <table>
    <thead>
      <th>Title</th><th>Publication date</th>
    </thead>
    <tbody>
    {rss.map((item, i) =>
      <tr key={i}><td>{item.title}</td><td>{item.pubDate}</td></tr>
    )}
    </tbody>
  </table>
)

Rss.propTypes = {
  rss: PropTypes.array.isRequired
}

export default Rss
