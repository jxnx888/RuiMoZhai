import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Me from '@/pages/me/Me'
import Class from '@/pages/class/Class'
import Type from '@/pages/type/Type'
import searchDetail from '@/pages/home/components/searchDetail'
import vipClass from '@/pages/vipClass/vipClass'
import classList from  '@/pages/classList/classList'

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
    },
    {
      path: '/Type/:id',
      name: 'Type',
      component: Type
    },
    {
      path: '/Class/:id',
      name: 'Class',
      component: Class
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail
    },
    {
      path: '/vipClass',
      name: 'vipClass',
      component: vipClass
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList
    }
  ],

})
