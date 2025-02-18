<script setup>
import FaqItem from "./FaqItem.vue";
</script>

<template>
  <section class="section">
    <div class="w-layout-blockcontainer container w-container">
      <div class="faqs-block">
        <div class="subheading-flex" style="opacity: 1;">
          <div class="icon-wrapper">
            <img 
              width="Auto" 
              height="Auto" 
              alt="" 
              src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae493_svg_xL0N.svg" 
              loading="eager" 
              class="icon"
            />
          </div>
          <h5>questions</h5>
        </div>
        <h2>Des questions ?</h2>
        <p class="max-width-30rem">
          Nous nous engageons à rendre votre expérience aussi fluide et simple que possible.
        </p>
      </div>
      
      <div class="space-4rem"></div>

      <div class="faq-wrapper slide-up-animation">
        <FaqItem 
          question="Comment ça marche ?" 
          answer="INdeep vérifie les passeports et cartes d'identité en utilisant la technologie MRZ et les codes-barres."
        />
        <FaqItem 
          question="Mes données sont-elles sécurisées ?" 
          answer="Oui, vos données sont protégées par des protocoles de cryptage."
        />
        <FaqItem 
          question="Puis-je vérifier plusieurs documents à la fois ?" 
          answer="Oui, vous pouvez vérifier plusieurs passeports ou cartes simultanément."
        />
        <FaqItem 
          question="Puis-je vérifier des documents de différents pays ?" 
          answer="Oui, INdeep prend en charge divers types de documents internationaux."
        />
      </div>
    </div>
  </section>
</template>

<style>
.faq-question {

    font-size: 1.2em;
  
}
</style>
