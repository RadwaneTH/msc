<template>
    <div>
      <h2>Vérification de votre email</h2>
      <p v-if="statusMessage">{{ statusMessage }}</p>
      <p v-else>En vérification...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  const statusMessage = ref('');
  
  const route = useRoute();
  
  onMounted(async () => {
    const token = route.query.token;
  
    if (token) {
      try {
        const response = await axios.get(`/.netlify/functions/verify?token=${token}`);
        statusMessage.value = response.data.message;
      } catch (error) {
        statusMessage.value = error.response?.data?.message || "Une erreur est survenue.";
      }
    } else {
      statusMessage.value = "Token manquant.";
    }
  });
  </script>
  