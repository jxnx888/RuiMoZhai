import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Me from '@/pages/me/Me'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
