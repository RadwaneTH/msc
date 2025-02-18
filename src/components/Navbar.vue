<script setup>
  // Add any script logic here
</script>

<template>
  <div
    data-animation="default"
    class="navbar w-nav"
    data-easing2="ease"
    data-easing="ease"
    data-collapse="medium"
    data-w-id="06ab6c64-468c-b44e-1b8c-856deb96ba7f"
    role="banner"
    data-no-scroll="1"
    data-duration="400"
    data-doc-height="1"
    style="opacity: 1;"
  >
    <!-- Logo -->
    <a
      href="/"
      aria-current="page"
      class="logo-link-wrapper w-nav-brand w--current"
      aria-label="home"
    >
      <img
        width="Auto"
        height="5em"
        alt="Logo"
        src="../assets/logo.svg"
        sizes="(max-width: 991px) 124.921875px, 7vw"
        class="logo"
      />
    </a>

    <!-- Navigation Container -->
    <div class="nav-container w-container">
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div class="nav-link-wrapper">
          <a href="/" class="nav-link w-nav-link">ACCEUIL</a>
        </div>
        <div class="nav-link-wrapper">
          <a href="/about" class="nav-link w-nav-link">SERVICES</a>
        </div>
        <div class="nav-link-wrapper">
          <a href="/services" class="nav-link w-nav-link">FAQ</a>
        </div>
        <div class="nav-link-wrapper">
          <a href="/blog" class="nav-link w-nav-link">CREATEUR</a>
        </div>
        <div class="nav-link-wrapper">
          <router-link to="/contact" class="nav-link w-nav-link">CONTACT</router-link>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <div
        class="menu-button w-nav-button"
        aria-label="menu"
        role="button"
        tabindex="0"
        aria-controls="w-nav-overlay-0"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        <div class="burger-icon w-icon-nav-menu"></div>
      </div>
    </div>

    <!-- Navigation Overlay -->
    <div class="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0"></div>
  </div>
</template>

<style scoped>
  /* Add custom styles here */
</style>
