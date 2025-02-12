<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

// Animation d'affichage de la navbar
const navbarVisible = ref(false);
const router = useRouter();

// Menu toggle pour mobile
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Activer la classe `.show` après le montage du composant
onMounted(() => {
  setTimeout(() => {
    navbarVisible.value = true;
  }, 400); // Petit délai pour s'assurer que Vue applique la transition
});


const goToInscription = () => {
  router.push('/register');
};
</script>

<template>
  <div class="container">
    <nav :class="['navbar', { show: navbarVisible }]">
      <div class="logo"> <router-link to="/" style="color: black; text-decoration: none;">INdeep</router-link></div>
      <button class="menu-toggle" @click="toggleMenu" >&#9776;</button>
      <ul :class="['nav-links', { active: isMenuOpen }]">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><button class="btn"  @click="goToInscription">Inscription</button></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
}

.navbar {
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  background-color: #ffffff38;
  border-radius: 13px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  padding: 1rem 2rem;
  display: flex;
  font-family: 'Satoshi', sans-serif;
  width: 90%;

  /* Animation d'entrée */
 
  transform: translateY(-20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.navbar.show {
  opacity: 1;
  transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}


.logo {
  font-size: 20px;
  font-family: 'Satoshi', sans-serif;
}

.menu-toggle {
  background: none;
  border: none;
  color: #151515;
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  align-items: center;

}

.nav-links li a {
  color: var(--color--font-color);
  text-decoration: none;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 300;
}

.nav-links li a:hover {
  opacity: 0.8;
  font-size: 0.98em;
}

.btn {
  padding: 0.8em 2em;
  border-color: transparent;
  border-radius: 0.4em;
  border-bottom: 1px solid #e28e2a;
  color: #767676;
}

.btn:hover {
  padding: 0.77em 2em;
  border-bottom-width: 2px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    background-color: #fffc;
    border-radius: 1.375rem;
    margin-top: 21em;
    padding: 2rem;
    position: absolute;
 
  }

  .nav-links.active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 87%;
  }
}
</style>
