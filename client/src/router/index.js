import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeVue.vue'
import RegisterUser from '../components/RegisterUser.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name : 'register',
    component : RegisterUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
