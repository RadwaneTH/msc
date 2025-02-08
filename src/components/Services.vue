<script>
export default {
  name: "BentoSection",
};
</script>

<template>
  <section id="services">
    <div class="padding-global">
      <div class="w-layout-blockcontainer container w-container">
        <div id="bento" class="bento-wrapper">
          <div class="bento-header">
            <div class="tag-marquee">
              <div class="tag" v-for="n in 3" :key="n">
                <div class="elipse"></div>
                <div class="text-size-small caps">
                INdeep est simple, efficase et securiser
                </div>
              </div>
            </div>
            <div class="heading-component">
              <div class="max-width-80ch">
                <div class="heading-4">
                  Explorez nos services de vérification ID.
                </div>
              </div>
              <div class="max-width-45ch">
                <div>
                  INdeep garantit une vérification d'identité optimale pour les clients et les entreprises, avec des mesures de sécurité renforcées.
                </div>
              </div>
            </div>
          </div>
          
          <div class="bento-component">
            <div class="bento-row">
              <div class="card-small">
                <img 
                  src="../assets/img/img2.jpg" 
                  loading="lazy" 
                  alt="Product Image" 
                  class="image"
                />
              </div>
              
              <a href="/products" class="card-big w-inline-block">
                <div class="card-big-content">
                  <div class="max-width-60ch">
                    <div class="heading-6">
                      Verification ID est tout aussi fiable avec INdeep et facilite vos besoins.
                    </div>
                  </div>
                  <div class="secondary-button">
                    <div class="text-size-small text-weight-medium">En savoir plus</div>
                    <div class="arrow-wrapper">
                      <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec73d25cc29a183b05252f_Arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>
                <div class="card-image">
                  <img 
                    src="../assets/img/img1.jpg" 
                    loading="lazy" 
                    alt="Product Image" 
                    class="image"
                  />
                </div>
              </a>
            </div>
            
            <div class="bento-row">
              <a href="/products" class="card-big w-inline-block">
                <div class="card-big-content">
                  <div class="max-width-40ch">
                    <div class="heading-6">
                      Vérification et validation de votre passeport.
                    </div>
                  </div>
                  <div class="secondary-button">
                    <div class="text-size-small text-weight-medium">En savoir plus</div>
                    <div class="arrow-wrapper">
                      <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec73d25cc29a183b05252f_Arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>
                <div class="card-image">
                  <img 
                    src="../assets/img/img3.jpg" 
                    loading="lazy" 
                    alt="Product Image" 
                    class="image"
                  />
                </div>
              </a>
              
              <div class="card-small">
                <div class="relative">
                  <a href="/products" class="primary-button w-inline-block">
                    <div class="text-weight-medium caps">Learn More</div>
                    <div class="arrow-wrapper">
                      <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec73d25cc29a183b05252f_Arrow.svg" alt="Arrow" />
                    </div>
                  </a>
                </div>
                <div class="card-image">
                  <img 
                    src="../assets/img/img4.jpg" 
                    loading="lazy" 
                    alt="Product Image" 
                    class="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.tag{
  text-transform: none;
  animation: scrollText 7s  linear infinite;
}


@keyframes scrollText {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }

</style>
