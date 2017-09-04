import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import List from 'components/list/list'
import Recommend from 'components/recommend/recommend'
Vue.use(Router)
export default new Router({
  routes: [
  {
  	path:'/',
  	redirect:'./recommend'
  },
    {
      path: '/home',
      component: Home
    },
    {
    	path: '/list',
    	component: List
    },
    {
    	path: '/recommend',
    	component: Recommend
    }
  ]
})
