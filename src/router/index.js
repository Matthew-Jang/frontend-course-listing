import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ViewCourses from '../views/ViewCourses.vue'
import AddCourse from '../views/AddCourse.vue'
import UpdateCourse from '../views/UpdateCourse.vue'

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
    },
    {
      path: '/courses/add',
      name: 'add',
      component: AddCourse
    },
    {
      path: '/courses/update/:id',
      name: 'update',
      component: UpdateCourse
    }
  ]
})

export default router
