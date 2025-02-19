<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

// Function to handle Intersection Observer
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  // Observe all elements with the 'fade-in-up' class
  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});




//////////////// Function register    /////////////////////////////

const router = useRouter();

// Reactive state for user input
const user = ref({
  username: "",
  email: "",
  password: "",
});

const message = ref(""); // To store success/error messages

const registerUser = async () => {
  if (user.value.password !== user.value.confirmPassword) {
    message.value = "Passwords do not match!";
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VUE_APP_API_URL}/register`, {
      username: user.value.username,
      email: user.value.email,
      password: user.value.password,
    });

    message.value = response.data.message;
    router.push("/profile"); // Redirect to Connexion on success 
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    message.value = error.response?.data?.message || "Registration failed";
  }
};





////////////////////////////////////////////////////////////////////////


</script>

<template>
  <Navbar />

  <!-- Main Section -->
  <section class="section fade-in-up">
    <div class="w-layout-blockcontainer container w-container">
      <div class="space-page-top"></div>

      <!-- About Block -->
      <div class="about-block">
        <!-- Subheading -->
        <div class="subheading-flex" data-w-id="55686b65-573b-6b1e-27a8-356f0a4302e2" style="opacity: 1;">
          <div class="icon-wrapper">
            <img 
              src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae492_svg_jcpq.svg"
              alt="Icon"
              class="icon"
              loading="eager"
            />
          </div>
          <h5>Inscription gratuite</h5>
        </div>

        <!-- Contact Title -->
        <h1 class="contact-title" data-w-id="2b428689-5a35-99ff-f397-e68c91393ae6" style="opacity: 1;">
            Rejoindre INdeep
        </h1>

        <!-- Contact Description -->
        <h5 class="max-width-20rem" data-w-id="2b428689-5a35-99ff-f397-e68c91393ae8" style="opacity: 1;">
            Profitez de plusieurs plans pour la validation de votre identité.


        </h5>
      </div>

      <div class="space-4rem"></div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="section fade-in-up">
    <div class="w-layout container w-container">
      <div class="form-wrapper slide-up-animation w-form" style="opacity: 1;">
        <form id="email-form" name="email-form"  @submit.prevent="registerUser" aria-label="Email Form">
          <div class="field-wrapper">
            <label for="name" class="field-label">Nom et prenom</label>
            <input class="text-field w-input" maxlength="256" name="username" placeholder="n. p. Nom Prenom" type="text" id="name" v-model="user.username" />
          </div>

          <div class="field-wrapper">
            <label for="email" class="field-label">Votre adresse email</label>
            <input class="text-field w-input" maxlength="256" name="email" placeholder="e. g. exemple@email.com" type="email" id="email" v-model="user.email" required />
          </div>

          <div class="field-wrapper">
            <label for="Phone" class="field-label">Creer un mot de passe</label>
            <input class="text-field w-input" maxlength="256" name="password" placeholder="Votre mot de passe" type="password" id="password" v-model="user.password" />
          </div>

          <div class="field-wrapper">
            <label for="Phone" class="field-label">Confirmer votre mot de passe</label>
            <input class="text-field w-input" maxlength="256" name="cfpassword" placeholder="Confirmer votre mot de passe" type="password" id="cfpassword" v-model="user.confirmPassword" />
          </div>

         

          <input type="submit" class="button w-button" value="Creer un compte" />

          <p v-if="message" style="color: black;">{{ message }}</p>
        </form>

        
      </div>

      <div class="space-7rem"></div>
    </div>
  </section>


   <div class="fade-in-up">

    <Footer />
   </div>
 
</template>

<style>
.fade-in-up {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }


</style>
