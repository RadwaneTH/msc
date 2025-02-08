<script setup>
// Ajoutez ici vos scripts si nécessaire
</script>

<template>
  <div class="navbar w-nav" role="banner" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease">
    <div class="padding-global">
      <div class="container w-container">
        <div class="navbar-component">
          <!-- Logo -->
          <router-link to="/" class="brand w-nav-brand w--current" aria-current="page" aria-label="home">
            <div class="logo-navbar" loading="lazy" style="font-size: 20px;font-weight: 500;">INdeep</div>
          </router-link>
          
          <div class="right-navbar-content">
            <!-- Bouton de menu -->
            <div class="nav-menu-wrap">
              <div 
                class="menu-button w-nav-button" 
                aria-label="menu" 
                role="button" 
                tabindex="0" 
                aria-controls="w-nav-overlay-0" 
                aria-haspopup="menu" 
                aria-expanded="false"
              >
                <div class="menu-icon w-icon-nav-menu"></div>
              </div>
            </div>
            
            <!-- Navigation -->
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a href="/" class="nav-link w-inline-block w--current" aria-current="page">
                <div>Acceuil</div>
              </a>
              <a href="#services" class="nav-link w-inline-block">
                <div>services</div>
              </a>
              <a href="#target" class="nav-link w-inline-block">
                <div>FAQ</div>
              </a>
              <a href="#target" class="nav-link w-inline-block">
                <div>Createur</div>
              </a>
              <div class="button-border">
                <router-link to="/inscription" class="button-navbar margin-left w-inline-block">
                  <div class="text-size-small">Inscription</div>
                </router-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    <div class="overlay-navbar"></div>
    <div class="w-nav-overlay" id="w-nav-overlay-0" data-wf-ignore></div>
  </div>
</template>

<style>

html {
            scroll-behavior: smooth; /* Enables smooth scrolling */
        }
</style>
