<template>
  <div id="classic-info">
    <section id="banner">
      <v-app
        class="vuetify-viewport"
        style="height: 550px; touch-action: pan-y"
      >
        <v-carousel
          hide-delimiters
          class="vuetify-slider"
          style="left: 0px; transform: translateX(0%)"
        >
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
            <v-tabs v-model="tab" class="nav justify-content-center mb-10">
              <v-tab v-for="item in categoryTab" :key="item">
                <a class="nav-link" data-toggle="tab">{{ item }}</a>
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
                <v-tab-item v-for="item in categoryTab" :key="item">
                  <v-sheet>
                    <!-- Slider -->
                    <v-slide-group
                      class="vuetify-enabled is-draggable"
                      show-arrows
                    >
                      <!-- Item -->

                      <!-- Item -->

                      <!-- Item -->

                      <!-- Item -->

                      <!-- Item -->

                      <!-- Item -->

                      <!-- Item -->
                      <v-slide-item v-for="(item, i) in categoryWomen" :key="i">
                        <div class="col" style="max-width: 200px">
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
                      </v-slide-item>
                    </v-slide-group>
                  </v-sheet>
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

        <div
          class="flickity-viewport"
          style="height: 413.625px; touch-action: pan-y"
        >
          <div
            class="flickity-slider"
            style="left: 0px; transform: translateX(-49.18%)"
          >
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 0%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-6.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html"
                    >Cotton floral print Dress</a
                  >
                  <br />
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 24.59%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-10.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html"
                    >Suede cross body Bag</a
                  >
                  <br />
                  <span
                    class="
                      font-size-xs
                      text-gray-350 text-decoration-line-through
                    "
                    >$85.00</span
                  >
                  <span class="text-primary">$49.00</span>
                </div>
              </div>
            </div>
            <div
              class="col is-selected"
              style="max-width: 300px; position: absolute; left: 49.18%"
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
                    src="@/assets/img/products/product-32.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html"
                    >Cotton leaf print Shirt</a
                  >
                  <br />
                  <span class="text-muted">$65.00</span>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 73.77%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-7.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html">Leather Sneakers</a>
                  <br />
                  <a class="text-primary" href="#">Select Options</a>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 98.36%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-11.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html"
                    >Another fine dress</a
                  >
                  <br />
                  <span class="text-muted">$99.00</span>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 122.95%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-33.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html">Baseball Cap</a>
                  <br />
                  <span class="text-muted">$10.00</span>
                </div>
              </div>
            </div>
            <div
              class="col"
              style="max-width: 300px; position: absolute; left: 147.54%"
              aria-hidden="true"
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
                    src="@/assets/img/products/product-49.jpg"
                    alt="..."
                  />
                </div>

                <!-- Body -->
                <div class="card-body font-weight-bold text-center">
                  <a class="text-body" href="product.html">Leather sneakers</a>
                  <br />
                  <span class="text-muted">$19.00</span>
                </div>
              </div>
            </div>
          </div>
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
    <section id="service" class="py-9">
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
export default {
  name: 'BannerClassic',
  data: () => ({
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
  })
}
</script>

<style scoped>
/* banner styling */
.vuetify-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
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

/* .nav-link.active::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.25rem;
  border-top: 1px solid #ff6f61;
} */

/* category list styling */
.fade {
  transition: opacity 0.2s ease-in-out;
}
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
#category-list .v-tabs-slider {
  border-bottom-style: none;
  border-color: #ff6f61;
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
  transform: translateX(20%);
  transition: 1s;
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

/* new-arrivals section styling */
.btn-white-primary {
  background-color: #fff;
  color: #111;
}
.btn-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(1.5rem + 1.75rem + 2px);
  padding: 0;
  border-radius: 50%;
}
.card-action {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
}
.card-action-right {
  right: 1.25rem;
}
.btn-circle.btn-xs {
  width: calc(1.40625rem + 1rem + 2px);
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

/* #top-category .card-body {
  position: absolute;
} */
</style>
