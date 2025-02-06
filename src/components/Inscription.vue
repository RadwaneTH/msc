<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

</script>

<template>

    <Navbar />

<section>
  <div class="padding-global">
    <div class="w-layout-blockcontainer container small w-container">
      <div class="contact-wrapper">

        <!-- Hero Section -->
        <div class="hero-component">
          <div 
            data-w-id="c00620c6-d1fd-d318-c2ad-334f18eed9a7" 
            class="max-width-60ch-2"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d;">
            <div class="heading-2">Have questions or need support?</div>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          id="w-node-c00620c6-d1fd-d318-c2ad-334f18eed9aa-cbbb3018" 
          data-w-id="c00620c6-d1fd-d318-c2ad-334f18eed9aa" 
          class="form-wrapper w-form"
          style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d;">
          
          <form 
            id="email-form" 
            name="email-form" 
            data-name="Email Form" 
            method="get" 
            class="form" 
            data-wf-page-id="66ec6afe3cc26899cbbb3018" 
            data-wf-element-id="c00620c6-d1fd-d318-c2ad-334f18eed9ab" 
            aria-label="Email Form">
            
            <!-- Form Fields -->
            <div class="form-content">
              
              <!-- Name Field -->
              <div class="name-wrapper-contact">
                <label for="Name" class="text-size-medium-vw">Name</label>
                <input 
                  class="text-field-contact w-input" 
                  maxlength="256" 
                  name="Name" 
                  data-name="Name" 
                  placeholder="Enter your name" 
                  type="text" 
                  id="Name" 
                  required="">
              </div>

              <!-- Email Field -->
              <div class="name-wrapper-contact">
                <label for="Enter-Your-Email" class="text-size-medium-vw">E-mail</label>
                <input 
                  class="text-field-contact w-input" 
                  maxlength="256" 
                  name="Enter-Your-Email" 
                  data-name="Enter Your Email" 
                  placeholder="Enter your e-mail" 
                  type="email" 
                  id="Enter-Your-Email" 
                  required="">
              </div>

              <!-- Message Field -->
              <label for="Text-Field" class="text-size-medium-vw">Message</label>
              <textarea 
                id="Text-Field" 
                name="Text-Field" 
                maxlength="5000" 
                data-name="Text Field" 
                placeholder="Your message..." 
                class="text-field-contact w-input">
              </textarea>

            </div> <!-- End Form Fields -->

            <!-- Submit Button -->
            <div class="contact-button align-center">
              <div class="relative">
                <div class="primary-button">
                  <input type="submit" data-wait="Please wait..." class="submit-button w-button" value="Submit">
                  <div class="text-weight-medium caps">Contact us</div>
                </div>
              </div>
            </div>

          </form> <!-- End Contact Form -->

          <!-- Success Message -->
          <div class="success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
            <div class="text-size-contact">Thank you! Your submission has been received!</div>
          </div>

          <!-- Error Message -->
          <div class="error-message w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
            <div class="text-size-medium-contact">Oops! Something went wrong while submitting the form.</div>
          </div>

        </div> <!-- End Form Wrapper -->

      </div>
    </div>
  </div>
</section>

<Footer />


</template>