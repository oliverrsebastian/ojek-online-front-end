import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MemberPage from './views/MemberPage.vue'
import DriverPage from './views/DriverPage.vue'
import BookingPage from './views/BookingPage.vue'
import NotFound from './views/NotFound.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/members',
      name: 'MemberPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/MemberPage.vue')
      component : MemberPage
    },
    {
      path : '/drivers',
      name : 'DriverPage',
      component : DriverPage
    },
    {
      path : '/bookings',
      name : 'BookingPage',
      component : BookingPage
    },
    {
      path : '*',
      name : '404',
      component : NotFound
    }
  ]
})
