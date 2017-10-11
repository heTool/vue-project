<<<<<<< HEAD
import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home/home';
import List from 'components/list/list';
import Recommend from 'components/recommend/recommend';
import Project from 'components/project/wz';
import Login from 'components/login/login';
import Register from 'components/register/register'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
=======
import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import List from 'components/list/list'
import Recommend from 'components/recommend/recommend'
import Project from 'components/project/wz'

Vue.use(Router)
export default new Router({
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
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
<<<<<<< HEAD
    },
    {
      path:'/login',
      component:Login
    },{
      path:'/register',
      component:Register
    }
  ]
});
=======
    }
  ]
})
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
