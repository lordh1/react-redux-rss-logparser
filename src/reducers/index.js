import { combineReducers } from 'redux'
import { rss } from './rss'
import { top5 } from './logs'


const rootReducer = combineReducers({
  rss,
  top5
})

export default rootReducer
