import { UPDATE_DATA, UPDATE_USER } from './mutation-types'

export default {
  [UPDATE_DATA] (state, payload) {
    state.data[payload.day] = payload.data
  },
  [UPDATE_USER] (state, user) {
    state.user = user
  }
}
