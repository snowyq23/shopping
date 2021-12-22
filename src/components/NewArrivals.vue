<template>
  <section id="new-arrivals" class="py-12">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Heading -->
          <h2 class="mb-10 text-center">New Arrivals</h2>
        </div>
      </div>
    </div>

    <hooper
      class="slider-viewport"
      ref="carousel"
      @slide="updateCarousel"
      :infiniteScroll="true"
      :wheelControl="false"
      :itemsToShow="4.5"
      :transition="600"
      style="height: 100%"
    >
      <!-- Item -->

      <!-- Item -->

      <!-- Item -->

      <!-- Item -->

      <!-- Item -->

      <!-- Item -->

      <!-- Item -->
      <slide
        style="max-width: 300px"
        aria-hidden="true"
        v-for="(item, i) in newArrivals"
        :key="i"
        :initialSlide="i"
      >
        <div class="col">
          <div class="card">
            <!-- Image -->
            <div class="card-img">
              <!-- Action -->
              <v-btn-toggle
                class="btn btn-xs btn-circle card-action card-action-right"
                color="#ff6f61"
                borderless
                rounded
              >
                <v-btn class="btn-xs btn-circle btn-white-primary" icon>
                  <i class="fa fa-heart"></i>
                </v-btn>
              </v-btn-toggle>

              <!-- Badge -->
              <span
                class="
                  badge badge-dark
                  card-badge card-badge-left
                  text-uppercase
                "
                v-if="item.isSale"
              >
                Sale
              </span>

              <!-- Button -->
              <button
                class="btn btn-xs btn-block btn-dark card-btn"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i class="fa fa-eye mr-2 mb-1"></i> Quick View
              </button>

              <!-- Image -->
              <img
                class="card-img-top"
                :src="require(`@/assets/img/products/${item.image}.jpg`)"
                alt="..."
              />
            </div>

            <!-- Body -->
            <div class="card-body font-weight-bold text-center">
              <a class="text-body" :href="item.url">{{ item.name }}</a>
              <br />
              <span
                class="font-size-xs text-gray-350"
                :class="{
                  'text-decoration-line-through': item.discountedPrice !== null
                }"
                >{{ item.retailPrice }}</span
              >
              <span class="text-primary" v-if="item.discountedPrice !== null">
                {{ item.discountedPrice }}</span
              >
            </div>
          </div>
        </div>
      </slide>
    </hooper>
    <div class="d-flex justify-content-center">
      <v-progress-linear
        id="progressBar"
        buffer-value="100"
        :value="carouselData"
        color="#ff6f61"
        background-color="#e5e5e5"
      >
        {{ progressBar() }}
      </v-progress-linear>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'NewArrivals',
  components: {
    Hooper,
    Slide
  },
  data: () => ({
    carouselData: 0,
    slide: 0,
    newArrivals: [
      {
        image: 'product-6',
        url: 'product.html',
        name: 'Cotton floral print Dress',
        retailPrice: '$40.00',
        discountedPrice: null,
        isSale: false
      },
      {
        image: 'product-10',
        url: 'product.html',
        name: 'Suede cross body Bag',
        retailPrice: '$85.00',
        discountedPrice: '$49.00',
        isSale: true
      },
      {
        image: 'product-32',
        url: 'product.html',
        name: 'Cotton leaf print Shirt',
        retailPrice: '$65.00',
        discountedPrice: null,
        isSale: false
      },
      {
        image: 'product-7',
        url: 'product.html',
        name: 'Leather Sneakers',
        retailPrice: null,
        discountedPrice: 'Select Options',
        isSale: false
      },
      {
        image: 'product-11',
        url: 'product.html',
        name: 'Another fine dress',
        retailPrice: '$99.00',
        discountedPrice: null,
        isSale: false
      },
      {
        image: 'product-33',
        url: 'product.html',
        name: 'Baseball Cap',
        retailPrice: '$10.00',
        discountedPrice: null,
        isSale: false
      },
      {
        image: 'product-49',
        url: 'product.html',
        name: 'Leather sneakers',
        retailPrice: '$19.00',
        discountedPrice: null,
        isSale: false
      }
    ]
  }),
  methods: {
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
/* new arrivals section styling */
.btn-white-primary {
  background-color: #fff;
  color: #111;
}
.btn-white-primary:focus,
.btn-white-primary:hover {
  background-color: transparent;
  border-color: #ff6f61;
  color: #ff6f61;
}
.btn-circle,
.v-btn-toggle.btn-circle,
.v-btn-toggle .btn-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(1.5rem + 1.75rem + 2px);
  padding: 0;
  border-radius: 50%;
}

.btn-circle.btn-xs,
.v-btn-toggle.btn-circle.btn-xs {
  width: calc(1.40625rem + 1rem + 2px);
}

.v-btn-toggle > .v-btn.v-btn {
  border-radius: 50%;
}
#new-arrivals .card-action {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
}

/* progress bar styling */
#progressBar {
  width: 100%;
  max-width: 570px;
  float: left;
  height: 0.25rem;
  cursor: pointer;
  position: relative;
  bottom: 0;
  margin-top: 3rem;
}
</style>
