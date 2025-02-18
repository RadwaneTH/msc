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

<div class="space-7rem"></div>
<div class="space-2rem"></div>


    <section class="section ">
        <div class="w-layout-blockcontainer container padding-13-5rem w-container">
            
            <!-- Blog Post Header -->
            <div class="blog-wrapper flip-from-bottom-animation fade-in-up">
                <div class="badge-post">
                    <h5 class="no-wrap font-black">Hygiene Practices</h5>
                </div>
                <h4>Tips for a Healthier Home</h4>
                <p class="max-width-30rem">
                    A clean home is not just about aesthetics—it's also crucial for your health and well-being.
                </p>

                <!-- Author Section -->
                <div class="blog-block">
                    <div class="avatar-large-wrapper">
                        <img 
                            src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2d7/6706104d4f29e916e4cae301_Team1.jpg" 
                            alt="Author" 
                            loading="eager"
                        >
                    </div>
                    <h5>Jamie Lee</h5>
                </div>
                <p>Sep 14, 2024</p>
            </div>

            <div class="space-7rem"></div>






            <div class="metrics-grid-quarter">
    
    <!-- Quality Card -->
    <div 
        data-w-id="cf2a3ee0-14b5-9c0d-9642-1e4940080d5b" 
        class="metrics-card fade-in-up"
    >
        <img 
            src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae498_svg_WWOx.svg" 
            alt="Quality Icon" 
            loading="eager" 
            class="large-icon"
        >
        <h4 class="caps">Quality</h4>
        <h5>Every space is spotless and well-maintained.</h5>
    </div>

    <!-- Refresh Card -->
    <div 
        data-w-id="cf2a3ee0-14b5-9c0d-9642-1e4940080d63" 
        class="metrics-card background-dark-gray fade-in-up"
    >
        <img 
            src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae49d_svg_9eqO.svg" 
            alt="Refresh Icon" 
            loading="eager" 
            class="large-icon"
        >
        <h4 class="caps">Refresh</h4>
        <h5>Every room feeling fresh and rejuvenated.</h5>
    </div>

    <!-- Sanitize Card -->
    <div 
        data-w-id="cf2a3ee0-14b5-9c0d-9642-1e4940080d6b" 
        class="metrics-card background-primary fade-in-up"
    >
        <img 
            src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae48c_svg_4AKN.svg" 
            alt="Sanitize Icon" 
            loading="eager" 
            class="large-icon"
        >
        <h4 class="caps">Sanitize</h4>
        <h5>Top-grade sanitization techniques.</h5>
    </div>

    

  

        </div>





        </div>
    </section>

    <div class="space-7rem"></div>
    


    <div class="fade-in-up">

        <Footer />
    
    </div>


</template>

<style scoped>

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
