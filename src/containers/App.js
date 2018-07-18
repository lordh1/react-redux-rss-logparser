import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchrss } from '../actions/rss'
import { fetchlogs } from '../actions/logs'
import Rss from '../components/Rss'
import Logs from '../components/Logs'
import '../css/App.css'

class App extends Component {
  static propTypes = {
    rss: PropTypes.array.isRequired,
    top5: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    activeTab: 'rss'
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchrss())
    dispatch(fetchlogs())
  }

  showRSS = () => {
    this.setState({activeTab: 'rss'})
  }

  showLOG = () => {
    this.setState({activeTab: 'log'})
  }

  render() {
    const { rss, top5 } = this.props
    const { activeTab } = this.state

    let tab
    if(activeTab === 'rss') {
      tab = <Rss rss={rss} />
    } else if(activeTab === 'log') {
      tab = <Logs top5={top5}/>
    }

    return (
      <div className='Main'>
        <div>
          <button onClick={this.showRSS}>RSS</button>
          <button onClick={this.showLOG}>LOG</button>
        </div>
        <div>
          {tab}
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
