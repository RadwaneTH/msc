import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import  Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Register from '@/components/Register.vue';
import Profile from '@/components/Profile.vue';

const routes = [
  { path: '/', name: 'Home', component:Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'Profile', component: Profile }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
