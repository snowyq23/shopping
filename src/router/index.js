/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "index-classic" */ '../views/Index-Classic.vue'
      )
  },
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
