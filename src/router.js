import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Register from './components/Register.vue';
import Connexion from './components/Connexion.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/connexion', component: Connexion },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
