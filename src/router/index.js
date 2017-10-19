import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home/home';
import List from 'components/list/list';
import Recommend from 'components/recommend/recommend';
import Project from 'components/project/wz';
import AjbIndex from 'components/ajb/index'
import Login from 'components/login/login';
import Register from 'components/register/register';
import listChildren from 'components/list/listChildren';

Vue.use(Router);
export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: './recommend',
      component: Recommend
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List,
      children: [
        {
          path: ':id',
          component: listChildren
        }
      ]
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/project/detail',
      component: Project
    },
    {
      path: '/aijiabao/index',
      component: AjbIndex
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/listChildren',
      component: listChildren
    }
  ]
});
