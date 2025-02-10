import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'

import Inscription from './components/Inscription.vue';
import Connexion from './components/Connexion.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/inscription', component: Inscription },
  { path: '/connexion', component: Connexion }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
