import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Register from './components/Register.vue';
import Connexion from './components/Connexion.vue';
import Verify from './components/Verify.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/connexion', component: Connexion },
  { path: '/verify', name: 'Verify', component: Verify }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
