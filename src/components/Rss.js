import React from 'react'
import PropTypes from 'prop-types'

const Rss = ({rss}) => (
  <div>
    <h1>RSS</h1>
    <h3>List of articles</h3>
    <table>
      <thead>
        <tr><th>Title</th><th>Publication date</th></tr>
      </thead>
      <tbody>
      {rss.map((item, i) =>
        <tr key={i}><td>{item.title}</td><td>{item.pubDate}</td></tr>
      )}
      </tbody>
    </table>
  </div>
)

Rss.propTypes = {
  rss: PropTypes.array.isRequired
}

export default Rss
