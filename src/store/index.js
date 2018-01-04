import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  data: {
    today: {
      day: 1,
      nowVolume: 0,
      todayDrink: 0,
      todayRemaining: 0
    }
  },
  user: {
    name: '',
    height: 0,
    weight: 0
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
