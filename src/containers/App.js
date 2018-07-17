import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchrss } from '../actions/rss'
import { fetchlogs } from '../actions/logs'
import Rss from '../components/Rss'
import Logs from '../components/Logs'

class App extends Component {
  static propTypes = {
    rss: PropTypes.array.isRequired,
    top5: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchrss())
    dispatch(fetchlogs())
  }

  render() {
    const { rss, top5 } = this.props
    return (
      <div>
        <div>
          <Rss rss={rss} />
        </div>
        <div>
          <Logs top5={top5}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { rss, top5 } = state

  return {
    rss,
    top5
  }
}

export default connect(mapStateToProps)(App)
