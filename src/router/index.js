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
<<<<<<< HEAD
      component: List
=======
      component: List,
      children: [
        {
          path: ':id',
          component: listChildren
        }
      ]
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
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
<<<<<<< HEAD
      path:'/login',
      component:Login
    },{
      path:'/register',
      component:Register
    },{
      path:'/listChildren',
      component:listChildren
    },{
      path:'/list/:id',
      component:listChildren
=======
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
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
    }
  ]
});
