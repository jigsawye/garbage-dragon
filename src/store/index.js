import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'

Vue.use(Vuex)

const state = {
  data: {
    name: "",
    height: 0,
    weight: 0,
    day: 1,
    nowVolume: 0,
    todayDrink: 0,
    todayRemaining: 0
  }
}

export default new Vuex.Store({
  state,
  // actions
})
