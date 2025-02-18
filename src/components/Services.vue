<script>
// Ajoutez ici vos scripts Vue.js si nécessaire
</script>

<template>
  <section class="section">
    <div class="w-layout-blockcontainer container padding-4-5rem w-container">
      
      <!-- Première carte -->
      <div id="explore" class="card-flex">
        <div class="features-image-wrapper flip-from-left-animation">
          <img 
            sizes="(max-width: 479px) 80vw, (max-width: 991px) 312px, 22vw" 
          
            src="../assets/passverif.jpg" 
            loading="eager" 
            class="features-image"
          />
          <div class="pop-up-card top-right background-blur">
            <h4>2X</h4>
            <p>Essais gratuits</p>
          </div>
        </div>
        
        <div class="large-card">
          <div class="card-text-block slide-from-right-animation">
            <div class="subheading-flex">
              <div class="icon-wrapper">
                <img src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae495_svg_HFET.svg" 
                     alt="icon" 
                     class="icon" 
                     loading="eager"/>
              </div>
              <h5>Basé sur la vérification MRZ.</h5>
            </div>
            <h3>Validation <span class="italics">passport.</span></h3>
            <p class="max-width-30rem">Vérifiez et validez les passeports de vos clients en ligne avec INdeep, en toute sécurité.</p>
            <a href="/services" class="button-with-circle-icon w-inline-block">
              <p class="button-text">Explorer</p>
              <p class="button-text move-down hide-on-tab">Explore</p>
              <div class="circle-absolute"></div>
            </a>
          </div>
        </div>
      </div>
      
      <div class="space-7rem"></div>
      
      <!-- Deuxième carte -->
      <div class="card-flex reverse-on-tab">
        <div class="large-card">
          <div class="card-text-block slide-from-left-animation">
            <div class="subheading-flex">
              <div class="icon-wrapper">
                <img src="https://cdn.prod.website-files.com/6706104d4f29e916e4cae2ad/6706104d4f29e916e4cae495_svg_HFET.svg" 
                     alt="icon" 
                     class="icon" 
                     loading="eager"/>
              </div>
              <h5>Basé sur le MRZ et le code-barres.</h5>
            </div>
            <h3>Validation <span class="italics">Cartes ID.</span></h3>
            <p class="max-width-30rem">Vérifiez et validez les cartes ID de vos clients en ligne avec INdeep, en toute sécurité..</p>
            <a href="/about" class="button-with-circle-icon w-inline-block">
              <p class="button-text">Explorer</p>
              <p class="button-text move-down hide-on-tab">Explorer</p>
              <div class="circle-absolute"></div>
            </a>
          </div>
        </div>
        
        <div class="features-image-wrapper flip-from-left-animation">
          <img 
            sizes="(max-width: 479px) 80vw, (max-width: 991px) 312px, 22vw" 
           
            src="../assets/idverif.jpg" 
            loading="lazy" 
            class="features-image"
          />
          <div class="pop-up-card top-left background-blur">
            <h4>2X</h4>
            <p>Essais gratuits</p>
          </div>
        </div>
      </div>
      
      <div class="space-7rem"></div>
    </div>
  </section>
</template>

<style scoped>
/* Ajoutez ici vos styles CSS */
</style>