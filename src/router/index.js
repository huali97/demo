import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
Vue.use(VueRouter)

  const routes = [
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
    path: '/news',
    name: 'News',
    component: () => import( '../views/news')
 },
 {
   path: '/find',
   name: 'Find',
   component: () => import( '../views/find')
},
{
  path: '/serial',
  name: 'Serial',
  component: () => import( '../views/serial')
},
{
  path: '/my',
  name: 'My',
  component: () => import( '../views/my')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
