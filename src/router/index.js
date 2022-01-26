import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/linije',
    name: 'Linije',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "linije" */ '../views/Linije.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
  path: '/gradske',
    name: 'Gradske',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Gradske" */ '../views/Gradske.vue')
  },
  {
  path: '/prigradske',
    name: 'Prigradske',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Prigradske.vue')
  },
  {
  path: '/pregledkupnji',
  name: 'PregledKupnji',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "PregledKupnji" */ '../views/PregledKupnji.vue')
},
{
  path: '/termini',
  name: 'Termini',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "Termini" */ '../views/Termini.vue')
},
{
  path: '/gradskelinije',
  name: 'GradskeLinije',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/GradskeLinije.vue')
},
{
  path: '/prigradskelinije',
  name: 'PrigradskeLinije',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/PrigradskeLinije.vue')
},
{
  path: '/linija1',
  name: '1',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija1.vue')
},
{
  path: '/linija2',
  name: '2',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija2.vue')
},
{
  path: '/linija3',
  name: '3',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija3.vue')
},
{
  path: '/linija4',
  name: '4',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija4.vue')
},
{
  path: '/linija5',
  name: '5',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija5.vue')
},
{
  path: '/linija6',
  name: '6',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija6.vue')
},

{
  path: '/linija8',
  name: '8',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija8.vue')
},
{
  path: '/linija9',
  name: '9',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija9.vue')
},
{
  path: '/linija21',
  name: '21',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija21.vue')
},
{
  path: '/linija22',
  name: '22',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija22.vue')
},
{
  path: '/linija23',
  name: '23',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija23.vue')
},
{
  path: '/linija25',
  name: '25',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija25.vue')
},
{
  path: '/linija26',
  name: '26',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija26.vue')
},

{
  path: '/linija27',
  name: '27',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija27.vue')
},
{
  path: '/linija28',
  name: '28',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Linija28.vue')
},
{
  path: '/pretraga',
  name: 'Pretraga',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "GradskeLinije" */ '../views/Pretraga.vue')
},



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
