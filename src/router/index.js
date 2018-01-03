import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Router from 'vue-router'
import Home from '@/components/Home'
import My from '@/components/My'
import Achievement from '@/components/Achievement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      alias: '/'
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    }
  ]
})
