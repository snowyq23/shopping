/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () =>
      import(
        /* webpackChunkName: "index-classic" */ '../views/Index-Classic.vue'
      )
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/index-classic',
    name: 'Index-Classic',
    component: () =>
      import(
        /* webpackChunkName: "index-classic" */ '../views/Index-Classic.vue'
      )
  },
  {
    path: '/shopping-cart',
    name: 'Shopping-Cart',
    component: () =>
      import(
        /* webpackChunkName: "shopping-cart" */ '../views/Shopping-Cart.vue'
      )
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () =>
      import(/* webpackChunkName: "shopping-cart" */ '../views/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
