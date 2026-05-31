import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'), 
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
    },
    {
      path: '/projecten',
      name: 'projecten',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
    path: '/werkplekleren',
    name: 'werkplekleren',
    component: () => import('../views/WerkpleklerenView.vue'),
    },
    
  ],
  
})

export default router