<script setup>
import { onMounted } from 'vue';
import Navbar from './Navbar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Animation d'apparition avec IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});

// Redirection vers la connexion
const goToConnexion = () => {
  router.push('/connexion');
};
</script>

<template>
  <div>
    <Navbar />
  </div>

  <div class="message fade-in-up">
    <div class="info">
      <h1>Inscription <span>réussie !</span></h1>
      <h2>Votre compte INdeep a bien été créé.</h2>
      <p>Vous pouvez maintenant vous connecter à votre compte.</p>
      <button class="btncon" @click="goToConnexion">Connexion</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap');



/* Conteneur principal */
.message {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/img/bg2.svg'); 
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;


}

/* Carte d'information */
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em;
  max-width: 80%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

/* Titres et texte */
.info h1 {
  font-family: 'Inter', sans-serif;
  font-size: 4vw;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgb(53, 58, 62);
}

.info span {
  font-style: italic;
  font-weight: 100;
}

.info h2 {
  font-size: 1.4vw;
  font-weight: 400;
  color: rgb(53, 58, 62);
}

.info p {
  font-size: 1.2vw;
  font-weight: 300;
  color: rgb(97, 103, 108);
  margin-top: 1rem;
}

/* Bouton */
.btncon {
    padding: 0.8em 2em;
  border-color: transparent;
  border-radius: 0.4em;
  border-bottom: 1px solid #e28e2a;
  color: #767676;
  margin-top: 1.5rem;
 
}

.btncon:hover {
    padding: 0.77em 2em;
  border-bottom-width: 2px;
  cursor: pointer;
}

/* Animation fade-in */
.fade-in-up {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 🌍 Responsive design */
@media (max-width: 768px) {
  .info {
    padding: 3rem;
    max-width: 90%;
  }

  .info h1 {
    font-size: 2.5rem;
  }

  .info h2 {
    font-size: 1.2rem;
  }

  .info p {
    font-size: 1rem;
  }

  .btncon {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>
