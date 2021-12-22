<template>
  <section id="banner">
    <v-app class="slider-viewport" style="height: 550px; touch-action: pan-y">
      <v-carousel hide-delimiters class="vuetify-slider">
        <v-carousel-item
          style="left: 0px; transform: translateX(0%)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div
            class="w-100 bg-cover is-selected"
            :style="{
              'background-image': `url(${require('@/assets/img/covers/cover-5.jpg')})`,
              height: '100%'
            }"
          >
            <div class="container d-flex flex-column">
              <div
                class="row align-items-center py-12"
                style="min-height: 550px"
              >
                <div class="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-1">
                  <!-- Heading -->
                  <h1>Summer Sale</h1>

                  <!-- Heading -->
                  <h2 class="display-1 text-primary">-70%</h2>

                  <!-- Heading -->
                  <h5 class="mt-n4 mb-8">with promo code CN67EW*</h5>

                  <!-- Button -->
                  <a class="btn btn-dark" href="shop.html">
                    Shop Now <i class="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item
          style="left: 0px; transform: translateX(0%)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div
            class="w-100 bg-cover is-selected"
            :style="{
              'background-image': `url(${require('@/assets/img/covers/cover-23.jpg')})`,
              height: '100%'
            }"
          >
            <div class="container d-flex flex-column">
              <div
                class="row align-items-center justify-content-end py-12"
                style="min-height: 550px"
              >
                <div class="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-n1">
                  <!-- Heading -->
                  <h1 class="mb-5">Summer Collection</h1>

                  <!-- Text -->
                  <p class="mb-8 font-size-lg text-gray-500">
                    So called give, one whales tree seas dry place own day,
                    winged tree created spirit.
                  </p>

                  <!-- Button -->
                  <a class="btn btn-dark" href="shop.html">
                    Shop Now <i class="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item
          style="left: 0px; transform: translateX(0%)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div
            class="w-100 bg-cover"
            :style="{
              'background-image': `url(${require('@/assets/img/covers/cover-16.jpg')})`,
              height: '100%',
              width: '100%'
            }"
          >
            <div class="bg-dark-20">
              <div class="container d-flex flex-column">
                <div
                  class="row align-items-center justify-content-end"
                  style="min-height: 550px"
                >
                  <div class="col-12 text-center text-white">
                    <!-- Preheading -->
                    <h4 class="mb-0">Summer Styles</h4>

                    <!-- Heading -->
                    <h1 class="display-1">50% OFF</h1>

                    <!-- Links -->
                    <p class="mb-0">
                      <a
                        href="shop.html"
                        class="link-underline text-reset mx-4 my-4"
                        >Shop Women</a
                      >
                      <a
                        href="shop.html"
                        class="link-underline text-reset mx-4 my-4"
                        >Shop Men</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-app>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({})
}
</script>

<style>
/* banner styling */
.slider-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.slider-viewport {
  cursor: auto !important;
}
.vuetify-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* #banner .btn-dark {
  color: #fff;
  background-color: #1f1f1f;
  border-color: #1f1f1f;
} */

/* button styling */
#banner a {
  color: #fff;
}
</style>
