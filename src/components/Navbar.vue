<script setup>

</script>

<template>


<header id="header" class="header d-flex align-items-center light-background sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <RouterLink to="/" class="logo d-flex align-items-center me-auto me-xl-0">
       
        <h2 class="logo-text">iNdeep.fr</h2>
      </RouterLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><RouterLink  to="/" class="active">Accueil</RouterLink ></li>
          <li><RouterLink  to="/">Secteurs</RouterLink ></li>
          <li><RouterLink  to="/">Services</RouterLink ></li>
          <li><RouterLink  to="/">A propos</RouterLink ></li>
          
          <li class="dropdown"><RouterLink  to="/"><span>Solutions</span> <i class="bi bi-chevron-down toggle-dropdown"></i></RouterLink>
            <ul>
              <li><RouterLink  to="/">Nos clients</RouterLink></li>
              <li><RouterLink  to="/" >Entreprises</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink  to="/">Contact</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <RouterLink  to="/inscription" class="btn-nav" style="color:white;font-size: 13px;">Inscription</RouterLink>
      </div>

    </div>
  </header>


</template>

<style scoped>

.btn-nav {
    color:white;
    background: var(--accent-color);
    font-family: "Poppins", sans-serif;
    
    font-weight: 500;
    text-align: center;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 27px;
    border-radius: 2px;
    transition: 0.5s;
  
}
.logo-text{
  font-size: 20px;
    font-weight: 700;
    padding-left: 20px;
}


</style>