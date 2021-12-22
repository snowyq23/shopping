<template>
  <section id="lookbook" class="pb-12">
    <v-app>
      <div class="container">
        <div class="row position-relative align-items-center">
          <div
            class="col-md-7 col-lg-5 offset-lg-1 position-static"
            style="max-width: 40%; max-height: 100%"
          >
            <!-- Slider -->
            <v-carousel
              class="d-none d-md-block"
              hide-delimiters
              :show-arrows="false"
              v-model="slide"
            >
              <div class="slider-viewport" style="touch-action: pan-y">
                <!-- Item -->

                <!-- Item -->

                <!-- Item -->
                <v-carousel-item
                  v-for="(slide, i) in looks"
                  :key="i"
                  show-arrows
                  :src="require(`@/assets/img/products/${slide.leftImg}.jpg`)"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                  class="img-fluid fade"
                >
                </v-carousel-item>
              </div>
            </v-carousel>
          </div>

          <div class="col-md-5 col-lg-4 offset-lg-1">
            <!-- Preheading -->
            <h6 class="heading-xxs text-center text-gray-400">
              Perfect summer
            </h6>

            <!-- Heading -->
            <h3 class="mb-10 text-center">Summer Days Look</h3>

            <!-- Slider -->
            <v-carousel id="sliderArrivals" v-model="slide">
              <div class="slider-viewport" style="touch-action: pan-y">
                <!-- Item -->

                <!-- Item -->

                <!-- Item -->
                <v-carousel-item v-for="(slide, i) in looks" :key="i">
                  <div class="mx-auto col-12">
                    <!-- Card -->
                    <div class="card">
                      <!-- Badge -->
                      <div class="badge badge-dark card-badge">
                        <span class="text-uppercase">New</span>
                      </div>

                      <!-- Image -->
                      <div class="card-img">
                        <!-- Action -->
                        <v-btn-toggle
                          class="
                            btn btn-circle btn-xs
                            card-action card-action-right
                          "
                          color="#ff6f61"
                        >
                          <v-btn class="btn-white-primary">
                            <i class="fa fa-heart"></i>
                          </v-btn>
                        </v-btn-toggle>

                        <!-- Image -->
                        <img
                          class="card-img-top"
                          :src="
                            require(`@/assets/img/products/${slide.rightImg}.jpg`)
                          "
                          alt="..."
                        />
                      </div>

                      <!-- Body -->
                      <div class="card-body font-weight-bold text-center">
                        <a class="font-size-lg text-body" href="slide.link">
                          {{ slide.name }}
                        </a>
                        <div>
                          <span
                            class="text-gray-350 text-decoration-line-through"
                            >$90.00</span
                          >
                          <span class="font-size-lg text-primary">
                            ${{ slide.price }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </v-carousel-item>
              </div>
            </v-carousel>
          </div>
        </div>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {
  name: 'Lookbook',
  data: () => ({
    slide: 0,
    looks: [
      {
        name: 'Textured cotton Top',
        price: '90.00',
        link: 'product.html',
        leftImg: 'product-34',
        rightImg: 'product-35'
      },
      {
        name: 'Animal crossbody Bag',
        price: '59.00',
        link: 'product.html',
        leftImg: 'product-136',
        rightImg: 'product-137'
      },
      {
        name: 'Jacket with Pockets',
        price: '70.00',
        link: 'product.html',
        leftImg: 'product-138',
        rightImg: 'product-139'
      }
    ]
  })
}
</script>

<style>
/* lookbook styling */
#lookbook .card-action {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
}

/* v-app styling */
#lookbook .v-application {
  max-height: 650px;
}
#lookbook .v-application a {
  text-decoration: none;
  color: #111;
  background-color: transparent;
}

/* button styling */
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
</style>
