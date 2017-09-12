import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import List from 'components/list/list'
import Recommend from 'components/recommend/recommend'
import Project from 'components/project/wz'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: './recommend'
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
    },
    {
      path: '/project/detail',
      component: Project
    }
  ]
})
