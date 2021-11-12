<template>
  <div id="classic-info">
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

    <section id="top-category" class="pt-6">
      <div class="container-fluid px-3 px-md-6">
        <div class="row mx-n3">
          <div class="col-12 col-sm-4 d-flex flex-column px-3">
            <!-- Card-->
            <div class="card card-xl mb-3 mb-sm-0" style="min-height: 280px">
              <!-- Background -->
              <div class="card-bg">
                <div
                  class="card-bg-img bg-cover"
                  :style="{
                    'background-image': `url(${require('@/assets/img/products/product-22.jpg')})`,
                    height: '100%'
                  }"
                ></div>
              </div>

              <!-- Body -->
              <div class="card-body my-auto">
                <!-- Heading -->
                <h5 class="mb-0">Summer Hats</h5>

                <!-- Link -->
                <a
                  class="btn btn-link stretched-link px-0 text-reset"
                  href="shop.html"
                >
                  Shop Now <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 d-flex flex-column px-3">
            <!-- Card-->
            <div class="card card-xl mb-3 mb-sm-0" style="min-height: 280px">
              <!-- Background -->
              <div class="card-bg">
                <div
                  class="card-bg-img bg-cover"
                  :style="{
                    'background-image': `url(${require('@/assets/img/products/product-23.jpg')})`,
                    height: '100%'
                  }"
                ></div>
              </div>

              <!-- Body -->
              <div class="card-body my-auto">
                <!-- Heading -->
                <h5 class="mb-0">Men Hats</h5>

                <!-- Link -->
                <a
                  class="btn btn-link stretched-link px-0 text-reset"
                  href="shop.html"
                >
                  Shop Now <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 d-flex flex-column px-3">
            <!-- Card-->
            <div
              class="card card-xl bg-cover bg-hover"
              style="min-height: 280px"
            >
              <!-- Background -->
              <div class="card-bg">
                <div
                  class="card-bg-img bg-cover"
                  :style="{
                    'background-image': `url(${require('@/assets/img/products/product-24.jpg')})`,
                    height: '100%'
                  }"
                ></div>
              </div>

              <!-- Body -->
              <div class="card-body my-auto">
                <!-- Heading -->
                <h5 class="mb-0">Floral Dresses</h5>

                <!-- Link -->
                <a
                  class="btn btn-link stretched-link px-0 text-reset"
                  href="shop.html"
                >
                  Shop Now <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                                  {{ item.name
                                  }}<small>{{ item.amount }}</small>
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

    <section id="top-product">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <!-- Card -->
            <div class="card card-lg">
              <!-- Circle -->
              <div class="card-circle card-circle-lg card-circle-right">
                <strong
                  class="font-size-xs text-decoration-line-through opacity-80"
                  >$99.00</strong
                >
                <span class="font-size-h6 font-weight-bold">$59.00</span>
              </div>

              <!-- Image -->
              <img
                class="card-img-top"
                src="@/assets/img/products/product-30.jpg"
                alt="..."
              />

              <!-- Body -->
              <div
                class="
                  card-body
                  position-relative
                  mx-6 mx-lg-11
                  mt-n11
                  bg-white
                  text-center
                "
              >
                <!-- Heading -->
                <h4 class="mb-0">Cropped Trousers</h4>

                <!-- Link -->
                <a
                  class="btn btn-link stretched-link px-0 text-reset"
                  href="shop.html"
                >
                  Shop Now <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <!-- Card -->
            <div class="card card-lg">
              <!-- Circle -->
              <div class="card-circle card-circle-lg card-circle-right">
                <strong
                  class="font-size-xs text-decoration-line-through opacity-80"
                  >$99.00</strong
                >
                <span class="font-size-h6 font-weight-bold">$59.00</span>
              </div>

              <!-- Image -->
              <img
                class="card-img-top"
                src="@/assets/img/products/product-31.jpg"
                alt="..."
              />

              <!-- Body -->
              <div
                class="
                  card-body
                  position-relative
                  mx-6 mx-lg-11
                  mt-n11
                  bg-white
                  text-center
                "
              >
                <!-- Heading -->
                <h4 class="mb-0">Leather Sneakers</h4>

                <!-- Link -->
                <a
                  class="btn btn-link stretched-link px-0 text-reset"
                  href="shop.html"
                >
                  Shop Now <i class="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="new-arrivals" class="py-12">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Heading -->
            <h2 class="mb-10 text-center">New Arrivals</h2>
          </div>
        </div>
      </div>
      <div
        class="flickity-page-dots-progress flickity-enabled is-draggable"
        data-flickity='{"pageDots": true}'
        tabindex="0"
      >
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
          @slide="updateCarousel"
          :infiniteScroll="true"
          :itemsToShow="4.5"
          :transition="600"
          style="height: 100%"
        >
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
                  >
                    <v-btn class="btn-xs btn-circle btn-white-primary">
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
                    class="
                      font-size-xs
                      text-gray-350 text-decoration-line-through
                    "
                    >{{ item.retailPrice }}</span
                  >
                  <span
                    class="text-primary"
                    v-if="item.discountedPrice !== null"
                  >
                    {{ item.discountedPrice }}</span
                  >
                </div>
              </div>
            </div>
          </slide>
          <hooper-progress slot="hooper-addons"> </hooper-progress>
        </hooper>
        <div class="container">
          <progress id="progressBar" max="0.7" :value="carouselData">
            {{ progressBar() }}
          </progress>
          <!-- input for check purpose -->
          <input type="text" id="myValue" value="10" />
        </div>
        <!-- input for check purpose -->
        <input
          v-model="carouselData"
          type="number"
          style="width: 200px; margin-left: 200px"
        />
      </div>
    </section>

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

    <section id="blog" class="py-12 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Preheading -->
            <h6 class="heading-xxs mb-3 text-center text-gray-400">Our blog</h6>

            <!-- Heading -->
            <h2 class="mb-10 text-center">Latest in Blog</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card mb-7 shadow shadow-hover lift">
              <!-- Image -->
              <a href="blog-post.html">
                <img
                  src="@/assets/img/blog/blog-1.jpg"
                  alt="..."
                  class="card-img-top"
                />
              </a>

              <!-- Body -->
              <div class="card-body px-8 py-7">
                <!-- Time -->
                <p class="mb-3 font-size-xs">
                  <a class="text-muted" href="blog.html"
                    >Fashion / Jun 20, 2019</a
                  >
                </p>

                <!-- Heading -->
                <h6 class="mb-0">
                  <a class="text-body" href="blog-post.html">
                    Us yielding Fish sea night night the said him two
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card mb-7 shadow shadow-hover lift">
              <!-- Image -->
              <a href="blog-post.html">
                <img
                  src="@/assets/img/blog/blog-2.jpg"
                  alt="..."
                  class="card-img-top"
                />
              </a>

              <!-- Body -->
              <div class="card-body px-8 py-7">
                <!-- Time -->
                <p class="mb-3 font-size-xs">
                  <a class="text-muted" href="blog.html"
                    >Travel / Jun 13, 2019</a
                  >
                </p>

                <!-- Heading -->
                <h6 class="mb-0">
                  <a class="text-body" href="blog-post.html">
                    Tree earth fowl given moveth deep lesser After
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card mb-7 shadow shadow-hover lift">
              <!-- Image -->
              <a href="blog-post.html">
                <img
                  src="@/assets/img/blog/blog-3.jpg"
                  alt="..."
                  class="card-img-top"
                />
              </a>

              <!-- Body -->
              <div class="card-body px-8 py-7">
                <!-- Time -->
                <p class="mb-3 font-size-xs">
                  <a class="text-muted" href="blog.html"
                    >Lifestyle / Jun 08, 2019</a
                  >
                </p>

                <!-- Heading -->
                <h6 class="mb-0">
                  <a class="text-body" href="blog-post.html">
                    Given Set was without from god divide rule Hath
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- Link -->
            <div class="mt-7 text-center">
              <a class="link-underline" href="blog.html">Discover more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="py-9">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-lg-0">
              <!-- Icon -->
              <i class="fa fa-truck font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="heading-xxs mb-1">Free shipping</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  From all orders over $100
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-lg-0">
              <!-- Icon -->
              <i class="fa fa-exchange-alt font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Free returns</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  Return money within 30 days
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-md-0">
              <!-- Icon -->
              <i class="fa fa-lock font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Secure shopping</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">You're in safe hands</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex">
              <!-- Icon -->
              <i class="fa fa-tag font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Over 10,000 Styles</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  We have everything you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'BannerClassic',

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
    ],
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
    ],
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
      // var len = this.newArrivals.length
      if (el) {
        el.addEventListener('click', function (e) {
          var x = e.pageX - this.offsetLeft
          // var startPos = document.getElementByld('progressBar').position
          var xconvert = x / 400
          var finalx = xconvert.toFixed(1)
          var current = finalx * 10
          el.value = finalx
          slide.slideTo(Math.floor(current))
          document.getElementById('myValue').value = finalx
        })
      }
    },
    // To update progress bar via slider
    updateCarousel(payload) {
      this.carouselData =
        payload.currentSlide < 0
          ? (this.newArrivals.length - 1) / 10
          : payload.currentSlide / 10
    }
  }
}
</script>

<style scoped>
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
/* blog styling */
.shadow {
  box-shadow: 0 0.25rem 0.25rem rgba(17, 17, 17, 0.02) !important;
}
.shadow-hover {
  transition: all 0.2s ease-in-out;
  transition-property: box-shadow;
}
.shadow-hover:hover {
  box-shadow: 0 0.25rem 0.25rem rgba(17, 17, 17, 0.02),
    0 0.75rem 2.25rem rgba(17, 17, 17, 0.04) !important;
}
.lift {
  transition: all 0.2s ease-in-out;
  transition-property: transform, box-shadow;
}
.lift:focus,
.lift:hover {
  transform: translateY(-0.25rem);
}

.position-static {
  position: static !important;
}

/* navigation router */
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-link.active:focus,
.nav-link.active:hover {
  color: #ff6f61;
}

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

/* top product styling */
.card-circle {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #ff6f61;
  border-radius: 50%;
  color: #fff;
}
.card-circle-lg {
  width: 96px;
  height: 96px;
}
.card-circle-right {
  right: 1.25rem;
}
.card-body .btn > .fa-arrow-right {
  display: inline-block;
  transition: all 0.2s ease-in-out;
  transition-property: transform;
}
.card-body:hover .btn > .fa-arrow-right {
  transform: translateX(50%);
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: '';
  background-color: rgba(0, 0, 0, 0);
}

/* lookbook styling */
.v-btn-toggle:not(.v-btn-toggle--group) {
  color: #ff6f61;
}
#lookbook .card-action {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
}

/* new-arrivals section styling */
.btn-white-primary {
  background-color: #fff;
  color: #111;
}
.btn-white-primary:focus,
.btn-white-primary:hover {
  background-color: #ff6f61;
  border-color: #ff6f61;
  color: #fff;
}
.btn-circle,
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
#new-arrivals .card-action {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
}

/* background overlay */
.card-bg ~ * {
  z-index: 1;
}

/* button styling */
#banner a {
  color: #fff;
}
.btn-link {
  font-weight: 500;
  color: #111;
}
.btn-xs {
  height: calc(1.40625rem + 1rem + 2px);
  padding: 0.5rem 0.75rem;
  font-size: 0.9375rem;
}
.card-btn {
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.card-img:hover .card-btn {
  opacity: 1;
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

#progressBar {
  width: 400px;
  float: left;
  height: 10px;
  color: #ff6f61;
  margin-left: 200px;
}
</style>
