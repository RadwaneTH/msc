<script>

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const arrow = item.querySelector(".arrow");
        const answer = item.querySelector(".faq-bottom");

        arrow.addEventListener("click", function () {
            // Toggle la classe pour afficher ou cacher la réponse
            answer.classList.toggle("active");

            // Rotation de la flèche
            arrow.classList.toggle("rotated");
        });
    });
});

</script>

<template>
  <section id="target">
    <div class="padding-global">
      <div class="w-layout-blockcontainer container small w-container">
        <div class="faq-wrapper">
          <div
            data-w-id="91f2a621-a900-bda0-4e4b-f4d51b12c4ae"
            style="
              opacity: 1;
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="faq-heading"
          >
            <div class="heading-5">Questions fréquemment posées</div>
          </div>

          <div class="faq-component w-dyn-list">
            <div role="list" class="faq-list w-dyn-items">
              <div role="listitem" class="faq-hover w-dyn-item">
                <div class="faq-item">
                  <div class="faq-top">
                    <div class="faq-title-wrapper">
                      <div>Qu'est-ce qu'INdeep et à quoi sert-il ?</div>
                    </div>
                    <div class="faq-action-wrapper">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb302d_FAQ%20Arrow.svg"
                        alt="Arrow"
                        class="arrow"
                      />
                    </div>
                  </div>
                  <div class="faq-bottom">
                    <div class="faq-bottom-content">
                      <p>
                        INdeep est une plateforme de vérification d'identité qui permet de confirmer l'authenticité des pièces d'identité et des passeports en toute sécurité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" class="faq-hover w-dyn-item">
                <div class="faq-item">
                  <div class="faq-top">
                    <div class="faq-title-wrapper">
                      <div>Comment fonctionne la vérification d'un document ?</div>
                    </div>
                    <div class="faq-action-wrapper">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb302d_FAQ%20Arrow.svg"
                        alt="Arrow"
                        class="arrow"
                      />
                    </div>
                  </div>
                  <div class="faq-bottom">
                    <div class="faq-bottom-content">
                      <p>
                        Il vous suffit d'uploader une photo de votre document officiel. Notre système analyse les informations et vérifie leur authenticité grâce à des bases de données sécurisées.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" class="faq-hover w-dyn-item">
                <div class="faq-item">
                  <div class="faq-top">
                    <div class="faq-title-wrapper">
                      <div>Mes données sont-elles sécurisées ?</div>
                    </div>
                    <div class="faq-action-wrapper">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb302d_FAQ%20Arrow.svg"
                        alt="Arrow"
                        class="arrow"
                      />
                    </div>
                  </div>
                  <div class="faq-bottom">
                    <div class="faq-bottom-content">
                      <p>
                        Oui, la sécurité de vos informations est notre priorité. Toutes les données sont cryptées et traitées conformément aux normes de protection des données en vigueur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" class="faq-hover w-dyn-item">
                <div class="faq-item">
                  <div class="faq-top">
                    <div class="faq-title-wrapper">
                      <div>Quels types de documents puis-je vérifier sur INdeep ?</div>
                    </div>
                    <div class="faq-action-wrapper">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb302d_FAQ%20Arrow.svg"
                        alt="Arrow"
                        class="arrow"
                      />
                    </div>
                  </div>
                  <div class="faq-bottom">
                    <div class="faq-bottom-content">
                      <p>
                        INdeep prend en charge les passeports, cartes d'identité nationales et permis de conduire émis par différents pays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" class="faq-hover w-dyn-item">
                <div class="faq-item">
                  <div class="faq-top">
                    <div class="faq-title-wrapper">
                      <div>Combien de temps prend la vérification d'un document ?</div>
                    </div>
                    <div class="faq-action-wrapper">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec6afe3cc26899cbbb302d_FAQ%20Arrow.svg"
                        alt="Arrow"
                        class="arrow"
                      />
                    </div>
                  </div>
                  <div class="faq-bottom">
                    <div class="faq-bottom-content">
                      <p>
                        Le processus est rapide et prend généralement quelques minutes, selon la qualité du document soumis et les vérifications nécessaires.
                      </p>
                    </div>
                  </div>
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

.faq-bottom {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    padding: 0;
}

.faq-bottom.active {
    max-height: 200px; /* Ajuste cette valeur selon la hauteur de ton contenu */
    padding: 10px 0; /* Ajoute un léger padding pour l'effet de transition */
}

.arrow {
    transition: transform 0.5s ease;
}

.arrow.rotated {
    transform: rotate(180deg);
}





</style>
