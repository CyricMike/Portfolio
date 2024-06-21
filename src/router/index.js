// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      {  
        path: '/',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {   
        path: '/Experience',
        name: 'Experience',
        component: () => import('@/views/Experience.vue'),
      },
      {  
        path: '/Projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
      },
      {    
        path: '/Certificates',
        name: 'Certificates',
        component: () => import('@/views/Certificates.vue'),
      },
      {  
        path: '/Resume',
        name: 'Resume',
        component: () => import('@/views/Resume.vue'),
      },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'active',
})

export default router
