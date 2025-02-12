<script setup>
import { onMounted } from 'vue';
import Navbar from './Navbar.vue'
import Slid from './Slid.vue';
import Verifpassinfo from './Verifpassinfo.vue';
import Verifidinfo from './Verifidinfo.vue';

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
      <Slid />
  
      <!-- Apply fade-in-up effect to components -->
      <div class="fade-in-up">
        <Verifpassinfo />
      </div>
  
      <div class="fade-in-up">
        <Verifidinfo />
      </div>
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