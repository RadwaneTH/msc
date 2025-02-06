<script>
export default {
  name: "BentoSection",
};
</script>

<template>
  <section>
    <div class="padding-global">
      <div class="w-layout-blockcontainer container w-container">
        <div id="bento" class="bento-wrapper">
          <div class="bento-header">
            <div class="tag-marquee">
              <div class="tag" v-for="n in 3" :key="n">
                <div class="elipse"></div>
                <div class="text-size-small caps">
                  Designed for your everyday adventures
                </div>
              </div>
            </div>
            <div class="heading-component">
              <div class="max-width-80ch">
                <div class="heading-4">
                  Explore our curated collection of high-quality products
                </div>
              </div>
              <div class="max-width-45ch">
                <div>
                  Whether you're looking for a stylish new bag, a captivating book,
                  or a perfect mug for your morning brew, we've got you covered.
                </div>
              </div>
            </div>
          </div>
          
          <div class="bento-component">
            <div class="bento-row">
              <div class="card-small">
                <img 
                  src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851d1aa09dfee6fd19e_Space%20Kit%20Images%2003.jpg" 
                  loading="lazy" 
                  alt="Product Image" 
                  class="image"
                />
              </div>
              
              <a href="/products" class="card-big w-inline-block">
                <div class="card-big-content">
                  <div class="max-width-60ch">
                    <div class="heading-6">
                      Lightweight, durable, and perfect for any journey with our premium kits
                    </div>
                  </div>
                  <div class="secondary-button">
                    <div class="text-size-small text-weight-medium">See Details</div>
                    <div class="arrow-wrapper">
                      <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec73d25cc29a183b05252f_Arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>
                <div class="card-image">
                  <img 
                    src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb85129b701ffed0ce721_Space%20Kit%20Images%2002.jpg" 
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
                      Tools to stay organized and on top of your goals every day.
                    </div>
                  </div>
                  <div class="secondary-button">
                    <div class="text-size-small text-weight-medium">Plan Ahead</div>
                    <div class="arrow-wrapper">
                      <img src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66ec73d25cc29a183b05252f_Arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>
                <div class="card-image">
                  <img 
                    src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851a463b40d98d4a7db_Space%20Kit%20Images%2004.jpg" 
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
                    src="https://cdn.prod.website-files.com/66ec6afe3cc26899cbbb300a/66edb851658dc7040c4b85f8_Space%20Kit%20Images%2005.jpg" 
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
