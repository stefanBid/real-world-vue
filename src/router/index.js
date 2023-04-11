import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event/:id', //:id is a dynamic segment
      name: 'event-details',
      props:true,
      component: () => import('../views/EventDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // and finally the default route, when none of the above matches:
    { 
      path: "/:pathMatch(.*)*", 
      name: 'PageNotFound',
      component: () => import('../views/PageNotFoundView.vue') 
    },
    
  ]
})

export default router