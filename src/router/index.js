import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewCourses from '../views/ViewCourses.vue'
import AboutView from '../views/AboutView.vue' // Import the AboutView component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView // Use the imported component here
    },
    {
      path: '/courses',
      name: 'courses',
      component: ViewCourses
    }
  ]
})

export default router
