import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'

import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'

const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    hidden: true
  }, {
    path: '/pages',
    redirect: '/pages/p404',
    name: 'Pages',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [{
      path: '404',
      name: 'Page404',
      component: _import('errorPages/Page404')
    }, {
      path: '500',
      name: 'Page500',
      component: _import('errorPages/Page404')
    }, ]
  }


]

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

  {
    path: '/',
    redirect: '/home',
    name: '首页',
    component: Full,
    hidden: false,
    children: [{
        path: '/home',
        name: 'Home',
        icon: 'speedometer',
        component: _import('Home/index')
      }, {
        path: '/detail/:id',
        name: 'Detail',
        icon: 'speedometer',
        component: _import('Detail/index'),
        children:[{
            path: 'detail/physiology/:id',
            name: 'Physilogy',
            icon: 'speedometer',
            component: _import('Detail/Physiology/index')
          }, {
            path: 'detail/mood/:id',
            name: 'Mood',
            icon: 'speedometer',
            component: _import('Detail/Mood/index')
          }, {
            path: 'detail/location/:id',
            name: 'Location',
            icon: 'speedometer',
            component: _import('Detail/Location/index')
          }, {
            path: 'detail/abnormal/:id',
            name: 'Abnormal',
            icon: 'speedometer',
            component: _import('Detail/Abnormal/index')
          }]
      }],
  },

  {
    path: '*',
    redirect: '/pages/404',
    hidden: true
  }

];