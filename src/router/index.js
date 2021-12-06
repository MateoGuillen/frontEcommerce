import { createRouter, createWebHistory } from 'vue-router'

//import components
// import Home from '../views/Home.vue'

import Login from '../components/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'

//conf route to a component
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

