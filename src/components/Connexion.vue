<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { ref } from "vue";
import axios from "axios";


// Reactive state for user input
const user = ref({
  username: "",
  email: "",
  password: "",
});

const message = ref(""); // To store success/error messages

const registerUser = async () => {
  try {
    const response = await axios.post("/api/register", {
      username: user.value.username,
      email: user.value.email,
      password: user.value.password,
    });

    message.value = response.data.message; // Success message
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    message.value = error.response?.data?.message || "Registration failed";
  }
};











</script>

<template>

    <Navbar />

<section>
  <div class="padding-global">
    <div class="w-layout-blockcontainer container small w-container">
      <div class="contact-wrapper">

        <!-- Hero Section -->
        <div class="hero-component">
          <div 
            data-w-id="c00620c6-d1fd-d318-c2ad-334f18eed9a7" 
            class="max-width-60ch-2"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d;">
            <div class="heading-2">Connecter a votre compte </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          id="w-node-c00620c6-d1fd-d318-c2ad-334f18eed9aa-cbbb3018" 
          data-w-id="c00620c6-d1fd-d318-c2ad-334f18eed9aa" 
          class="form-wrapper w-form"
          style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d;">
          
          <form 
            id="email-form" 
            name="email-form" 
           @submit.prevent="registerUser"
            aria-label="Email Form">
            
            <!-- Form Fields -->
            <div class="form-content">
              
              <!-- Name Field -->
             

              <!-- Email Field -->
              <div class="name-wrapper-contact">
                <label for="Enter-Your-Email" class="text-size-medium-vw">E-mail</label>
                <input 
                  class="text-field-contact w-input" 
                  maxlength="256" 
                  v-model="user.email"
                  data-name="Enter Your Email" 
                  placeholder="Votre e-mail ici" 
                  type="email" 
                  id="Enter-Your-Email" 
                  required="">
              </div>

              <!-- Email Field -->
              <div class="name-wrapper-contact">
                <label for="Enter-Your-Email" class="text-size-medium-vw">Creer un mot de passe</label>
                <input 
                  class="text-field-contact w-input" 
                  maxlength="256" 
                  v-model="user.password"
                  data-name="Enter Your Email" 
                  placeholder="Choisir un mot de passe" 
                  type="password" 
                  id="Enter-Your-Email" 
                  required="">
              </div>


            </div> <!-- End Form Fields -->

            <!-- Submit Button -->
            <div class="contact-button align-center">
              <div class="relative">
                <div class="primary-button">
                  <input type="submit" class="submit-button w-button" value="Submit">
                  <div class="text-weight-medium caps">Inscription</div>
                </div>
              </div>
            </div>

            <p v-if="message" style="color: aliceblue;">{{ message }}</p>


          </form> <!-- End Contact Form -->

         
        </div> <!-- End Form Wrapper -->

      </div>
    </div>
  </div>
</section>

<Footer />


</template>