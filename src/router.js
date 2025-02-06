import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'

import Inscription from './components/Inscription.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/inscription', component: Inscription }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
