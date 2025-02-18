<script setup>
import { ref } from "vue";

defineProps({
  question: String,
  answer: String,  // Add the answer prop
});

const isOpen = ref(false);
</script>

<template>
  <div class="faq-dropdown">
    <div class="dropdown-toggle" @click="isOpen = !isOpen">
      <div class="space-1rem"></div>
      <div class="faq-flex">
        <h4 class="faq-question">{{ question }}</h4>
        <div class="faq-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
            <path stroke="black" stroke-width="2" d="M4 16h24" />
          </svg>
        </div>
      </div>
      <div class="space-1rem"></div>
    </div>
    <div v-if="isOpen" class="dropdown-answer">
      <p>{{ answer }}</p>  <!-- Display the answer here -->
    </div>
    <div class="space-1rem"></div>
  </div>
</template>

<style scoped>
.faq-dropdown {
  border-radius: 5px;
  cursor: pointer;
}
.dropdown-answer {
  margin-top: 0.7rem;
}
</style>
