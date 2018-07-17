import { RECEIVE_rss } from '../actions/rss'

export const rss = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_rss:
        return action.rss
      default:
        return state
    }
  }