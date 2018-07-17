import { GET_TOP5 } from '../actions/logs'

export const top5 = (state = { statIp: [], statFile: [] }, action) => {
    switch (action.type) {
      case GET_TOP5:
        return action.top5
      default:
        return state
    }
  }