import { UPDATE_DATA, UPDATE_USER } from './mutation-types'

export default {
  [UPDATE_DATA] (state, { day, data }) {
    state.data[day] = data
  },
  [UPDATE_USER] (state, user) {
    state.user = user
  }
}
