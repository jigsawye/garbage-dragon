import * as types from './mutation-types'
import axios from 'axios'

// const url = location.origin + ':3000'
const url = 'http://10.26.1.245:3000'

export const getData = async context => {
  await axios
    .get(url) 
    .then(response => {
      const { user: name, height, weight, day, remainwater, todaytotal, need } = response.data
      const data = {
        day,
        nowVolume: ~~remainwater,
        todayDrink: todaytotal,
        todayRemaining: need
      }
      const user = {
        name: name,
        height,
        weight
      }
      context.commit(types.UPDATE_DATA, { data, day: 'today' })
      context.commit(types.UPDATE_USER, user)
    })
    .catch(e => {
      console.log(e)
    })
  setTimeout(() => {
    context.dispatch('getData')
  }, 500)
}

export const getDataWithDay = (context, day) => {
  axios
    .get(`${url}/day/${day}`)
    .then(response => {
      const { todaytotal, status } = response.data
      const data = {
        drink: todaytotal,
        status: status === 'enough'
      }
      context.commit(types.UPDATE_DATA, { data, day: day })
    })
    .catch(e => {
      console.log(e)
    })
}
