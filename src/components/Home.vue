<script setup>
import { onMounted } from 'vue';
import Navbar from './Navbar.vue'
import Slider from './Slider.vue'
import Services from './Services.vue'
import Faq from "@/components/Faq.vue";
import Newsletter from './Newsletter.vue';
import Footer from './Footer.vue';


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

  
  
 
  
 
 

  <div>
   
      <Navbar />
     
      
    
      <!-- Apply fade-in-up effect to components -->
      
      <div class="fade-in-up">
        <Slider />
      </div>

      <div class="fade-in-up">
        <Services />
      </div>
  
      <div class="fade-in-up">
        <Faq />
      </div>

    

      <div class="fade-in-up">
        <Newsletter />
        <Footer />
      </div>
    
      <router-view></router-view>
    
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
