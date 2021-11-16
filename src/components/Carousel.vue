<template>
  <div>
    <!-- <div>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="require(item.src)"
        ></v-carousel-item>
      </v-carousel>
    </div> -->
    <v-app>
      <!-- <v-card> -->
      <v-carousel hide-delimiters style="height: 550px; touch-action: pan-y">
        <v-carousel-item style="left: 0px; transform: translateX(0%)">
          <div
            class="w-100 bg-cover"
            :style="{
              'background-image': `url(${require('@/assets/img/covers/cover-16.jpg')})`,
              height: '100%'
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

      <v-carousel>
        <v-carousel-item>
          <v-layout row style="width: 500px; height: 500px; z-index: 1">
            <div
              class="col is-selected"
              style="max-width: 400px; height: 500px; z-index: 1"
            >
              <v-card>
                <!-- Image -->
                <img
                  class="card-img-top"
                  src="@/assets/img/products/product-25.jpg"
                  alt="..."
                />

                <!-- Body -->
                <div class="card-body py-4 px-0 text-center">
                  <!-- Heading -->
                  <a class="stretched-link text-body" href="shop.html">
                    <h6>Dresses <small>(58)</small></h6>
                  </a>
                </div>
              </v-card>
            </div>
            <div
              class="col is-selected"
              style="max-width: 400px; height: 500px; z-index: 1"
            >
              <v-card>
                <!-- Image -->
                <img
                  class="card-img-top"
                  src="@/assets/img/products/product-25.jpg"
                  alt="..."
                />

                <!-- Body -->
                <div class="card-body py-4 px-0 text-center">
                  <!-- Heading -->
                  <a class="stretched-link text-body" href="shop.html">
                    <h6>Dresses <small>(58)</small></h6>
                  </a>
                </div>
              </v-card>
            </div>
          </v-layout>
        </v-carousel-item>
        <v-carousel-item>
          <v-layout row style="width: 500px; height: 500px; z-index: 1">
            <div
              class="col is-selected"
              style="max-width: 400px; height: 500px; z-index: 1"
            >
              <v-card>
                <!-- Image -->
                <img
                  class="card-img-top"
                  src="@/assets/img/products/product-25.jpg"
                  alt="..."
                />

                <!-- Body -->
                <div class="card-body py-4 px-0 text-center">
                  <!-- Heading -->
                  <a class="stretched-link text-body" href="shop.html">
                    <h6>Dresses <small>(58)</small></h6>
                  </a>
                </div>
              </v-card>
            </div>
            <div
              class="col is-selected"
              style="max-width: 400px; height: 500px; z-index: 1"
            >
              <v-card>
                <!-- Image -->
                <img
                  class="card-img-top"
                  src="@/assets/img/products/product-25.jpg"
                  alt="..."
                />

                <!-- Body -->
                <div class="card-body py-4 px-0 text-center">
                  <!-- Heading -->
                  <a class="stretched-link text-body" href="shop.html">
                    <h6>Dresses <small>(58)</small></h6>
                  </a>
                </div>
              </v-card>
            </div>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
      <!-- </v-card> -->

      <!-- footer -->
      <div class="py-6">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- Copyright -->
              <p class="mb-3 mb-md-0 font-size-xxs text-muted">
                © 2019 All rights reserved. Designed by Unvab.
              </p>
            </div>
            <div class="col-auto">
              <!-- Payment methods -->
              <img
                class="footer-payment"
                v-for="(item, i) in payment"
                :key="i"
                :src="item.link"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/visa.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <!-- /footer -->

      <!-- multi-item card carousel -->
      <v-flex>
        <v-carousel hide-delimiters style="box-shadow: 0px 0px">
          <v-carousel-item v-for="i in 2" :key="i">
            <v-layout row>
              <v-flex sm4 v-for="j in 6" :key="j" pl-2 pr-2>
                <v-card>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="0.8"
                  ></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Card {{ i }}-{{ j }}</h3>
                      <div>Card text</div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <!-- /multi-item carousel -->

      <!-- v-slide-group => catogory-list -->
      <!-- <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item style="width: 500px; height: 500px">
          <v-card>
            <img
              class="card-img-top"
              src="@/assets/img/products/product-25.jpg"
              alt="..."
            />
            <h1>Heading</h1>
          </v-card>
        </v-slide-item>
      </v-slide-group> -->
      <div class="tab-content">
        <!-- Pane -->
        <div class="tab-pane fade active show" id="topSellersTab">
          <v-sheet>
            <!-- Slider -->
            <v-slide-group
              show-arrows
              class="vuetify-enabled is-draggable"
              style="height: 236px; touch-action: pan-y"
            >
              <!-- <template v-slot:prev="{ on, attrs }" style="margin-right: 6rem">
                <i
                  v-bind="attrs"
                  v-on="on"
                  class="fa fa-chevron-left ml-2"
                  style="color: var(--secondary); font-size: 2rem"
                ></i>
              </template>
              <template v-slot:next="{ on, attrs }">
                <i
                  v-bind="attrs"
                  v-on="on"
                  class="fa fa-chevron-right ml-2"
                  style="color: var(--secondary); font-size: 2rem"
                ></i>
              </template> -->
              <!-- Item -->

              <!-- Item -->

              <!-- Item -->

              <!-- Item -->

              <!-- Item -->

              <!-- Item -->

              <!-- Item -->
              <v-slide-item v-for="n in 1" :key="n" class="test">
                <v-card
                  :color="'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="100"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <!-- <v-scale-transition> -->
                    <h1>Ph</h1>
                    <!-- </v-scale-transition> -->
                  </v-row>
                </v-card>
              </v-slide-item>
              <v-slide-item v-for="(item, i) in categoryWomen" :key="i">
                <div class="col" style="max-width: 200px">
                  <div class="card">
                    <!-- Image -->
                    <img
                      class="card-img-top"
                      :src="require(`@/assets/img/products/${item.image}.jpg`)"
                      alt="..."
                    />

                    <!-- Body -->
                    <div class="card-body py-4 px-0 text-center">
                      <!-- Heading -->
                      <a class="stretched-link text-body" :href="item.link">
                        <h6>Sweatshirts <small>(11)</small></h6>
                      </a>
                    </div>
                  </div>
                </div>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </div>

      <!-- /v-slide-group -->

      <!-- tab  -->
      <v-tabs v-model="currentTab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="currentTab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <div>
            <h1>ph</h1>
          </div>
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- /tab -->

      <!-- progress linear -->
      <v-range-slider hint="Im a hint" max="50" min="-50"></v-range-slider>
      <v-progress-linear value="15"></v-progress-linear>
      <!-- /progress linear -->

      <!-- slide together 2 different carousel (different data then finalised on using in Classic -->
      <div id="q-app" class="q-pa-md row justify-center q-gutter-md">
        <v-sheet
          v-for="(item, index) in looks"
          :key="index"
          style="width: 20rem"
        >
          <v-card-text class="q-pa-none">
            listing_id: {{ item.listing_id }}
          </v-card-text>
          <v-sheet class="q-pa-none">
            <v-carousel
              animated
              arrows
              navigation
              infinite
              style="height: 15rem"
              v-model="slide"
            >
              <v-carousel-item
                v-for="(slide, index) in item.look"
                :key="index"
                :name="index"
                :src="require(`@/assets/img/products/${slide.image}.jpg`)"
              >
                <v-card-text
                  align="center"
                  class="q-pa-none text-center bg-red"
                >
                  image_id: we
                </v-card-text>
              </v-carousel-item>
            </v-carousel>
          </v-sheet>
        </v-sheet>
      </div>
      <!-- /slide together 2 different carousel -->

      <!-- unselect button -->
      <div>
        <v-btn-toggle card-action card-action-right>
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>

          <v-btn>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
          <v-btn class="btn btn-xs btn-circle btn-white-primary">
            <i class="fa fa-heart"></i>
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- /unselect button -->

      <!-- process slider -->
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
          class="vuetify-page-dots-progress flickity-enabled is-draggable"
          tabindex="0"
        >
          <!-- Item -->

          <!-- Item -->

          <!-- Item -->

          <!-- Item -->

          <!-- Item -->

          <!-- Item -->

          <!-- Item -->

          <div class="slider-viewport" style="touch-action: pan-y">
            <v-window class="vuetify-slider">
              <v-window-item
                class="col"
                style="max-width: 300px"
                aria-hidden="true"
                v-for="(item, i) in newArrivals"
                :key="i"
              >
                <div class="card">
                  <!-- Image -->
                  <div class="card-img">
                    <!-- Action -->
                    <button
                      class="
                        btn btn-xs btn-circle btn-white-primary
                        card-action card-action-right
                      "
                      data-toggle="button"
                    >
                      <i class="fa fa-heart"></i>
                    </button>

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
              </v-window-item>
            </v-window>
          </div>
          <ol class="flickity-page-dots">
            <li class="dot" aria-label="Page dot 1"></li>
            <li class="dot" aria-label="Page dot 2"></li>
            <li
              class="dot is-selected"
              aria-label="Page dot 3"
              aria-current="step"
            ></li>
            <li class="dot" aria-label="Page dot 4"></li>
            <li class="dot" aria-label="Page dot 5"></li>
            <li class="dot" aria-label="Page dot 6"></li>
            <li class="dot" aria-label="Page dot 7"></li>
          </ol>
        </div>
      </section>
      <!-- /process slider -->

      <!-- dialog -->
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog transition="scroll-x-reverse-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                <a
                  class="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items="2">
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                </a>
              </v-btn>
            </template>

            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >Opening from the bottom</v-toolbar
                >
                <v-card-text>
                  <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn icon @click="dialog.value = false">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
      <!-- /dialog -->
    </v-app>

    <!-- self slider + clickable progress bar -->
    <div id="slider-new-arrivals" class="container">
      <hooper
        class="slider-viewport"
        ref="carousel"
        @slide="updateCarousel"
        :infiniteScroll="true"
        :itemsToShow="4.5"
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
                <span class="text-primary" v-if="item.discountedPrice !== null">
                  {{ item.discountedPrice }}</span
                >
              </div>
            </div>
          </div>
        </slide>
        <hooper-progress slot="hooper-addons"> </hooper-progress>
      </hooper>
      <div class="container">
        <!-- <progress id="progressBar" max="1" value="0.1">
          {{ progressBar() }}
        </progress> -->
        <progress id="progressBar" max="0.7" :value="carouselData">
          {{ progressBar() }}
        </progress>
        <input type="text" id="myValue" value="10" />
      </div>
      <input v-model="carouselData" type="number" style="width: 200px" />
    </div>
    <!-- /self slider + clickable progress bar -->
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       message: '',
//       items: [
//         {
//           src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
//         },
//         {
//           src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
//         },
//         {
//           src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
//         },
//         {
//           src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
//         }
//       ]
//     }
//   }
// }

import { Hooper, Slide, Progress as HooperProgress } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  data() {
    return {
      // message: '',
      // items: [
      //   {
      //     src: '@/assets/img/products/product-35.jpg'
      //   },
      //   {
      //     src: '@/assets/img/products/product-137.jpg'
      //   },
      //   {
      //     src: '@/assets/img/products/product-139.jpg'
      //   }
      // ],
      payment: [
        { name: 'mastercard', link: './assets/img/payment/mastercard.svg' },
        { name: 'visa', link: '@/assets/img/payment/visa.svg' },
        { name: 'amex', link: '@/assets/img/payment/amex.svg' },
        { name: 'paypal', link: '@/assets/img/payment/paypal.svg' },
        { name: 'maestro', link: '@/assets/img/payment/maestro.svg' },
        { name: 'klarna', link: '@/assets/img/payment/klarna.svg' }
      ],
      categoryWomen: [
        {
          image: 'product-25',
          name: 'Dresses',
          amount: '(58)',
          link: 'shop.html'
        },
        {
          image: 'product-26',
          name: 'Tops',
          amount: '(35)',
          link: 'shop.html'
        },
        {
          image: 'product-27',
          name: 'T-shirts',
          amount: '(27)',
          link: 'shop.html'
        },
        {
          image: 'product-28',
          name: 'Shoes',
          amount: '(64)',
          link: 'shop.html'
        },
        {
          image: 'product-29',
          name: 'Jeans',
          amount: '(12)',
          link: 'shop.html'
        },
        {
          image: 'product-125',
          name: 'Sweatshirts',
          amount: '(11)',
          link: 'shop.html'
        },
        {
          image: 'product-126',
          name: 'Jackets',
          amount: '(9)',
          link: 'shop.html'
        }
      ],
      currentTab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
        { tab: 'Six', content: 'Tab 6 Content' },
        { tab: 'Seven', content: 'Tab 7 Content' },
        { tab: 'Eight', content: 'Tab 8 Content' },
        { tab: 'Nine', content: 'Tab 9 Content' },
        { tab: 'Ten', content: 'Tab 10 Content' }
      ],
      looks: [
        {
          look: [
            { image: 'product-34' },
            { image: 'product-136' },
            { image: 'product-138' }
          ]
        },
        {
          look: [
            {
              name: 'Textured cotton Top',
              price: '$90.00',
              link: 'product.html',
              image: 'product-35'
            },
            {
              name: 'Animal crossbody Bag',
              price: '$59.00',
              link: 'product.html',
              image: 'product-137'
            },
            {
              name: 'Jacket with Pockets',
              price: '$70.00',
              link: 'product.html',
              image: 'product-139'
            }
          ]
        }
      ],
      slide: 0,
      inventory: [
        {
          listing_id: 806789572,
          images: [
            {
              url: 'https://i.etsystatic.com/21044343/r/il/f0382c/2349430290/il_570xN.2349430290_k5lu.jpg',
              listing_image_id: 2349430290
            },
            {
              url: 'https://i.etsystatic.com/21044343/r/il/e66a62/2397022637/il_570xN.2397022637_l0n3.jpg',
              listing_image_id: 2397022637
            }
          ]
        },
        {
          listing_id: 806128860,
          images: [
            {
              url: 'https://i.etsystatic.com/21044343/r/il/29489e/2394764157/il_570xN.2394764157_9zpj.jpg',
              listing_image_id: 2394764157
            },
            {
              url: 'https://i.etsystatic.com/21044343/r/il/c4d024/2394763869/il_570xN.2394763869_l01h.jpg',
              listing_image_id: 2394763869
            }
          ]
        },
        {
          listing_id: 958184537,
          images: [
            {
              url: 'https://i.etsystatic.com/21044343/r/il/5ae42e/2853729016/il_570xN.2853729016_rmyl.jpg',
              listing_image_id: 2853729016
            },
            {
              url: 'https://i.etsystatic.com/21044343/r/il/8e4929/2901390827/il_570xN.2901390827_72ku.jpg',
              listing_image_id: 2901390827
            }
          ]
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
      ],
      carouselData: 0
    }
  },

  components: {
    Hooper,
    Slide,
    HooperProgress
  },
  // watch: {
  //   carouselData() {
  //     this.$refs.carousel.slideTo(this.carouselData)
  //   }
  // },
  methods: {
    // To access slider via arrow
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
    // slideTo() {
    //   this.$refs.carouselNewArrival.slideTo(3)
    // },
    // To access slider via clickable progress bar
    progressBar: function () {
      var el = document.getElementById('progressBar')
      // var slide = this.$refs.carousel
      // var len = this.newArrivals.length
      if (el) {
        // el.addEventListener('click', function (e) {
        //   var x = e.pageX - this.offsetLeft
        //   // var startPos = document.getElementByld('progressBar').position
        //   var xconvert = x / 400
        //   var finalx = xconvert.toFixed(1)
        //   var current = finalx * 10
        //   if (current <= len) {
        //     el.value = finalx
        //     slide.slideTo(Math.floor(current))
        //   } else {
        //     el.value = len / 10
        //   }
        //   document.getElementById('myValue').value = finalx
        // })
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

<style>
/* #new-arrivals .v-slide-group__content {
  left: 0px;
  transform: translateX(-50%);
} */

#progressBar {
  width: 400px;
  float: left;
  height: 23px;
  color: #ff6f61;
}

/* .progress {
  display: block;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;

  background-color: #f5f5f5;
  background-image: linear-gradient(to right, black, black);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.4s ease-in-out;
} */

/* hooper */
.slider-button {
  transform: translateY(-10%);
}
.slider-buttons-lg .slider-button.previous {
  margin-right: 50px;
}
.slider-buttons-lg .slider-button.next {
  margin-left: 50px;
}
.slider-buttons-lg .slider-button {
  background-color: transparent;
  color: #bababa;
}
</style>
