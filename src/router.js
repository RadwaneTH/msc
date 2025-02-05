import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Register from './components/Register.vue';
import Inscription from './components/Inscription.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/inscription', component: Inscription }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
