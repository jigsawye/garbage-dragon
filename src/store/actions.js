import { UPDATE_DATA, UPDATE_USER } from './mutation-types'
import axios from 'axios'

// const url = location.origin + ':3000'
const url = 'http://10.26.1.245:3000'

export const getData = async ({ commit }) => {
  try {
    const response = await axios.get(url) 
    const { user: name, height, weight, day, remainwater, todaytotal, need } = response.data
    const data = {
      day,
      nowVolume: ~~remainwater,
      todayDrink: todaytotal,
      todayRemaining: need
    }
    const user = {
      name,
      height,
      weight
    }
  
    commit(UPDATE_DATA, { data, day: 'today' })
    commit(UPDATE_USER, user)
  } catch (e) {
    console.log(e)
  }
}

export const getDataWithDay = async ({ commit }, day) => {
  try {
    const response = await axios.get(`${url}/day/${day}`)
    const { todaytotal, status } = response.data
    const data = {
      drink: todaytotal,
      status: status === 'enough'
    }
    commit(UPDATE_DATA, { data, day })
  } catch (e) {
    console.log(e)
  }
}
