<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { onMounted } from 'vue';

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
          <h5>disponible 24h/7</h5>
        </div>

        <!-- Contact Title -->
        <h1 class="contact-title" data-w-id="2b428689-5a35-99ff-f397-e68c91393ae6" style="opacity: 1;">
          Contactez-nous
        </h1>

        <!-- Contact Description -->
        <h5 class="max-width-20rem" data-w-id="2b428689-5a35-99ff-f397-e68c91393ae8" style="opacity: 1;">
          N’hésitez pas à nous contacter. Nous sommes à votre écoute !








        </h5>
      </div>

      <div class="space-4rem"></div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="section fade-in-up">
    <div class="w-layout-blockcontainer container w-container">
      <div class="form-wrapper slide-up-animation w-form" style="opacity: 1;">
        <form id="email-form" name="email-form" data-name="Email Form" method="get" aria-label="Email Form">
          <div class="field-wrapper">
            <label for="name" class="field-label">Nom et prenom</label>
            <input class="text-field w-input" maxlength="256" name="name-3" placeholder="n. p. Nom Prenom" type="text" id="name-3" />
          </div>

          <div class="field-wrapper">
            <label for="email" class="field-label">Votre adresse email</label>
            <input class="text-field w-input" maxlength="256" name="email-3" placeholder="e. g. exemple@email.com" type="email" id="email-3" required />
          </div>

          <div class="field-wrapper">
            <label for="Phone" class="field-label">Votre numero de telephone</label>
            <input class="text-field w-input" maxlength="256" name="Phone" placeholder="(123) - 456 - 789" type="tel" id="Phone" />
          </div>

          <div class="field-wrapper">
            <label for="Message" class="field-label">Votre message</label>
            <textarea id="Message" name="Message" maxlength="5000" placeholder="Ecrire ici votre message" required class="message-area w-input"></textarea>
          </div>

          <input type="submit" class="button w-button" value="Send Message" />
        </form>

        <!-- Success and Error Messages -->
        <div class="contact-success-message w-form-done" tabindex="-1" aria-label="Email Form success">
          <div>Thank you! Your submission has been received!</div>
        </div>

        <div class="contact-error-message w-form-fail" tabindex="-1" aria-label="Email Form failure">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
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
