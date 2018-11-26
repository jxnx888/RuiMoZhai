import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Me from '@/pages/me/Me'
import Class from '@/pages/class/Class'
import Type from '@/pages/type/Type'
import searchDetail from '@/pages/home/components/searchDetail'
import projectsList from '@/pages/projectsList/projectsList'
import classList from  '@/pages/classList/classList'
import Skill from '@/pages/skill/skill'
import Contact from '@/pages/contact/contact'
import Projects from '@/pages/projectsList/projectsList'
import Blog from '@/pages/blog/blog'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skill
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
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
      path: '/projectsList/:id',
      name: 'projectsList',
      component: projectsList
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList
    },
    {
      path: '/github',
      beforeEnter() {location.href = 'https://github.com/jxnx888'}
    },
    {
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/in/xin-ning-28818b115/'}
    },
    ,
    {
      path: '/facebook',
      beforeEnter() {location.href = 'https://www.facebook.com/jxnx888'}
    },
    

  ],

})
