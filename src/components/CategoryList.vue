<template>
  <section id="category-list" class="py-12">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Heading -->
          <h2 class="mb-4 text-center">Shop by Category</h2>

          <!-- Nav -->
          <v-tabs
            v-model="tab"
            class="nav justify-content-center mb-10"
            slider-color="#ff6f61"
          >
            <v-tab v-for="item in categoryTab" :key="item" class="tab">
              <a class="nav-link">{{ item }}</a>
            </v-tab>
          </v-tabs>

          <!-- Content -->
          <div class="tab-content">
            <!-- Pane -->
            <v-tabs-items
              v-model="tab"
              class="tab-pane fade show"
              id="topSellersTab"
            >
              <v-tab-item
                v-for="item in categoryTab"
                :key="item"
                transition="fade-transition"
              >
                <!-- Slider -->
                <!-- Previous button -->
                <div class="d-flex slider-buttons-lg slider-buttons-offset">
                  <button
                    @click.prevent="slidePrev"
                    class="slider-button slider-prev-next-button previous"
                  >
                    <i class="fas fa-chevron-left"></i>
                  </button>

                  <!-- Content -->
                  <!-- Item -->

                  <!-- Item -->

                  <!-- Item -->

                  <!-- Item -->

                  <!-- Item -->

                  <!-- Item -->

                  <!-- Item -->
                  <hooper
                    class="slider-viewport"
                    ref="carousel"
                    :itemsToShow="4.5"
                    :infiniteScroll="true"
                    :wheelControl="false"
                    :transition="600"
                  >
                    <slide
                      v-for="(item, i) in categoryWomen"
                      :key="i"
                      style="max-width: 200px; margin: 0"
                    >
                      <div class="col">
                        <div class="card">
                          <!-- Image -->
                          <img
                            class="card-img-top"
                            :src="
                              require(`@/assets/img/products/${item.image}.jpg`)
                            "
                            alt="..."
                          />

                          <!-- Body -->
                          <div class="card-body py-4 px-0 text-center">
                            <!-- Heading -->
                            <a
                              class="stretched-link text-body"
                              :href="item.link"
                            >
                              <h6>
                                {{ item.name }}<small>{{ item.amount }}</small>
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </slide>
                  </hooper>

                  <!-- Next button -->
                  <button
                    @click.prevent="slideNext"
                    class="slider-button slider-prev-next-button next"
                  >
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'CategoryList',
  components: {
    Hooper,
    Slide
  },
  data: () => ({
    carouselData: 0,
    slide: 0,
    tab: null,
    categoryTab: ['Women', 'Men', 'Kids'],
    categoryWomen: [
      {
        image: 'product-25',
        name: 'Dresses',
        amount: ' (58)',
        link: 'shop.html'
      },
      {
        image: 'product-26',
        name: 'Tops',
        amount: ' (35)',
        link: 'shop.html'
      },
      {
        image: 'product-27',
        name: 'T-shirts',
        amount: ' (27)',
        link: 'shop.html'
      },
      {
        image: 'product-28',
        name: 'Shoes',
        amount: ' (64)',
        link: 'shop.html'
      },
      {
        image: 'product-29',
        name: 'Jeans',
        amount: ' (12)',
        link: 'shop.html'
      },
      {
        image: 'product-125',
        name: 'Sweatshirts',
        amount: ' (11)',
        link: 'shop.html'
      },
      {
        image: 'product-126',
        name: 'Jackets',
        amount: ' (9)',
        link: 'shop.html'
      }
    ]
  }),
  methods: {
    carouselData: 0,
    slidePrev() {
      this.$refs.carousel[0].slidePrev()
    },
    slideNext() {
      this.$refs.carousel[0].slideNext()
    },
    progressBar: function () {
      var el = document.getElementById('progressBar')
      var slide = this.$refs.carousel
      var len = this.newArrivals.length
      var range = Math.floor(100 / len)
      if (el) {
        el.addEventListener('click', function (e) {
          var percentage = Math.floor((e.offsetX / this.offsetWidth) * 100) // Must put multi 100 in `Math.floor`
          var slideNo = Math.floor((percentage * len) / 100)
          var xconvert = (slideNo + 1) * range
          var finalx = slideNo === len - 1 ? 100 : xconvert
          el.value = finalx // Update progress bar
          slide.slideTo(slideNo) // Update slider
          document.getElementById('myValue').value = finalx
        })
      }
    },
    // To update progress bar via slider
    updateCarousel(payload) {
      var len = this.newArrivals.length
      var range = Math.floor(100 / len)
      var current = payload.currentSlide
      this.carouselData = current === len - 1 ? 100 : (current + 1) * range // Update progress bar
      // // Condition to maintain unexpected cases of hooper
      if (this.carouselData > 100) {
        this.carouselData = range
      } else if (this.carouselData === 0) {
        this.carouselData = 100
      }
    }
  }
}
</script>

<style>
/* category list styling */

@media (min-width: 992px) {
  #category-list .v-slide-group__wrapper {
    padding-right: 6rem !important;
    padding-left: 6rem !important;
  }
}
#category-list .v-tab--active > .nav-link,
#category-list .v-tab:hover > .nav-link {
  color: #ff6f61;
}

/* slider styling */
.slider-button {
  transform: translateY(-10%);
}
.slider-buttons-lg .slider-button.previous {
  margin-right: 6rem !important;
  font-size: 1.5rem;
}
.slider-buttons-lg .slider-button.next {
  margin-left: 6rem !important;
  font-size: 1.5rem;
}
.slider-buttons-lg .slider-button {
  background-color: transparent;
  color: #bababa;
}
</style>
