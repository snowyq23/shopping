<template>
  <div id="topNavGeneral">
    <div
      id="rate"
      class="navbar navbar-topbar navbar-expand-xl navbar-light bg-light"
    >
      <div class="container">
        <!-- Promo -->
        <div class="mr-xl-8">
          <i class="fa fa-truck mr-2"></i>
          <span class="heading-xxxs">Free shipping worldwide</span>
        </div>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topbarCollapse"
          aria-controls="topbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="topbarCollapse">
          <!-- Nav -->
          <ul class="nav nav-divided navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <!-- Toggle -->
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <img
                  class="mb-1 mr-1"
                  src="@/assets/img/flags/usa.svg"
                  alt="..."
                />
                United States
              </a>

              <!-- Menu -->
              <div class="dropdown-menu minw-0">
                <a
                  class="dropdown-item"
                  v-for="(item, i) in regions"
                  :key="i"
                  :href="item.href"
                >
                  <img
                    class="mb-1 mr-2"
                    :src="
                      require(`@/assets/img/flags/${item.alt.toLowerCase()}.svg`)
                    "
                    :alt="item.alt"
                  />{{ item.text }}
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <!-- Toggle -->
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                >USD</a
              >

              <!-- Menu -->
              <div class="dropdown-menu minw-0">
                <a
                  class="dropdown-item"
                  v-for="(item, i) in exchangeRate"
                  :key="i"
                  :href="item.href"
                  >{{ item.text }}</a
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <!-- Toggle -->
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                >English</a
              >

              <!-- Menu -->
              <div class="dropdown-menu minw-0">
                <a
                  class="dropdown-item"
                  v-for="(item, i) in languages"
                  :key="i"
                  :href="item.href"
                  >{{ item.text }}</a
                >
              </div>
            </li>
          </ul>

          <!-- Nav -->
          <ul class="nav navbar-nav mr-8">
            <li class="nav-item">
              <a class="nav-link" href="./shipping-and-returns.html"
                >Shipping</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./faq.html">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact-us.html">Contact</a>
            </li>
          </ul>

          <!-- Nav -->
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item ml-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item ml-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item ml-xl-n4">
              <a class="nav-link text-gray-350" href="#!">
                <i class="fab fa-medium"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand" href="./overview.html"> Shopper. </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- Nav -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >Home</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index.html"
                          >Default</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-classic.html"
                          >Classic</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-fashion.html"
                          >Fashion</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-boxed.html"
                          >Boxed</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-simple.html"
                          >Simple</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a
                          class="list-styled-link"
                          href="./index-asymmetric.html"
                          >Asymmetric</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-sidenav.html"
                          >Sidenav</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./index-landing.html"
                          >Landing</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown position-static hovered">
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >Catalog</a
              >

              <!-- Menu -->
              <div class="dropdown-menu w-100">
                <!-- Tabs -->
                <form class="mb-2 mb-lg-0 border-bottom-lg">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <!-- Nav -->
                        <nav
                          class="
                            nav nav-tabs nav-overflow
                            font-size-xs
                            border-bottom border-bottom-lg-0
                          "
                        >
                          <a
                            class="nav-link text-uppercase active"
                            data-toggle="tab"
                            href="#navTab"
                          >
                            Women
                          </a>
                          <a
                            class="nav-link text-uppercase"
                            data-toggle="tab"
                            href="#navTab"
                          >
                            Men
                          </a>
                          <a
                            class="nav-link text-uppercase"
                            data-toggle="tab"
                            href="#navTab"
                          >
                            Kids
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </form>

                <!-- Tab content -->
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="navTab">
                        <div class="container">
                          <div class="row">
                            <div class="col-6 col-md">
                              <!-- Heading -->
                              <div class="mb-5 font-weight-bold">Clothing</div>

                              <!-- Links -->
                              <ul class="list-styled mb-6 mb-md-0 font-size-sm">
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >All Clothing</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Blouses &amp; Shirts</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Coats &amp; Jackets</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Dresses</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Hoodies &amp; Sweats</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Denim</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Jeans</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Jumpers &amp; Cardigans</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Leggings</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-6 col-md">
                              <!-- Heading -->
                              <div class="mb-5 font-weight-bold">
                                Shoes &amp; Boots
                              </div>

                              <!-- Links -->
                              <ul class="list-styled mb-6 mb-md-0 font-size-sm">
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >All Shoes &amp; Boots</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Branded Shoes</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Boots</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Heels</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Trainers</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Sandals</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Shoes</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Wide Fit Shoes</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-6 col-md">
                              <!-- Heading -->
                              <div class="mb-5 font-weight-bold">
                                Bags &amp; Accessories
                              </div>

                              <!-- Links -->
                              <ul class="list-styled mb-0 font-size-sm">
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >All Bags &amp; Accessories</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Accessories</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Bags &amp; Purses</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Luggage</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Belts</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Hats</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Hair Accessories</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Jewellery</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Travel Accessories</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-6 col-md">
                              <!-- Heading -->
                              <div class="mb-5 font-weight-bold">
                                Collections
                              </div>

                              <!-- Links -->
                              <ul class="list-styled mb-0 font-size-sm">
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >All Collections</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Occasionwear</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Going Out</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Workwear</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Holiday Shop</a
                                  >
                                </li>
                                <li class="list-styled-item">
                                  <a class="list-styled-link" href="./shop.html"
                                    >Jean Fit Guide</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-4 d-none d-lg-block">
                              <!-- Card -->
                              <div class="card">
                                <!-- Image -->
                                <img
                                  class="card-img"
                                  src="@/assets/img/products/product-110.jpg"
                                  alt="..."
                                />

                                <!-- Overlay -->
                                <div
                                  class="
                                    card-img-overlay
                                    bg-dark-0 bg-hover
                                    align-items-center
                                  "
                                >
                                  <div class="text-center">
                                    <a
                                      class="btn btn-white stretched-link"
                                      href="./shop.html"
                                    >
                                      Shop Sweaters
                                      <i class="a fa-arrow-right ml-2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >Shop</a
              >

              <!-- Menu -->
              <div class="dropdown-menu" style="min-width: 650px">
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <!-- Heading -->
                        <div class="mb-5 font-weight-bold">Shop</div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./shop.html"
                              >Default</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shop-topbar.html"
                              >Topbar</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shop-collapse.html"
                              >Collapse</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shop-simple.html"
                              >Simple</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shop-masonry.html"
                              >Masonry</a
                            >
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div class="mb-5 font-weight-bold">Product</div>

                        <!-- Links -->
                        <ul class="list-styled font-size-sm">
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./product.html"
                              >Default</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./product-images-left.html"
                              >Images Left</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./product-image-grid.html"
                              >Image Grid</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./product-image-slider.html"
                              >Image Slider</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./product-images-stacked.html"
                              >Images Stacked</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <!-- Heading -->
                        <div class="mb-5 font-weight-bold">Support</div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shopping-cart.html"
                              >Shopping Cart</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./checkout.html"
                              >Checkout</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./order-completed.html"
                              >Order Completed</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./shipping-and-returns.html"
                              >Shipping &amp; Returns</a
                            >
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div class="mb-5 font-weight-bold">Account</div>

                        <!-- Links -->
                        <ul class="list-styled font-size-sm">
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-order.html"
                              >Order</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-orders.html"
                              >Orders</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-wishlist.html"
                              >Wishlist</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-personal-info.html"
                              >Personal Info</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-address.html"
                              >Addresses</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-address-edit.html"
                              >Addresses: New</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-payment.html"
                              >Payment</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-payment-edit.html"
                              >Payment: New</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              href="./account-payment-choose.html"
                              >Payment: Choose</a
                            >
                          </li>
                          <li class="list-styled-item">
                            <a class="list-styled-link" href="./auth.html"
                              >Auth</a
                            >
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div class="mb-5 font-weight-bold">Modals</div>

                        <!-- Links -->
                        <ul class="list-styled font-size-sm">
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalNewsletterHorizontal"
                            >
                              Newsletter: Horizontal
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalNewsletterVertical"
                            >
                              Newsletter: Vertical
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalProduct"
                            >
                              Product
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalSearch"
                            >
                              Search
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalShoppingCart"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalSizeChart"
                            >
                              Size Chart
                            </a>
                          </li>
                          <li class="list-styled-item">
                            <a
                              class="list-styled-link"
                              data-toggle="modal"
                              href="#modalWaitList"
                            >
                              Wait List
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >Pages</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./about.html"
                          >About</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./contact-us.html"
                          >Contact Us</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./store-locator.html"
                          >Store Locator</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./faq.html">FAQ</a>
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./coming-soon.html"
                          >Coming Soon</a
                        >
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./404.html">404</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >Blog</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./blog.html">Blog</a>
                      </li>
                      <li class="list-styled-item">
                        <a class="list-styled-link" href="./blog-post.html"
                          >Blog Post</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="docs/getting-started.html">Docs</a>
            </li>
          </ul>

          <!-- Nav -->
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" href="#modalSearch">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-orders.html">
                <i class="fa fa-user"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-wishlist.html">
                <i class="fa fa-heart"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" data-toggle="modal" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopNavGeneral',
  data: () => ({
    menu: [
      {
        link: '#!',
        text: 'Home',
        list: [
          { option: 'Default', href: './index.html' },
          { option: 'Classic', href: './index-classic.html' },
          { option: 'Fashion', href: './index-fashion.html' },
          { option: 'Boxed', href: './index-boxed.html' },
          { option: 'Simple', href: './index-simple.html' },
          { option: 'Asymmetric', href: './index-asymmetric.html' },
          { option: 'Sidenav', href: './index-sidenav.html' },
          { option: 'Landing', href: './index-landing.html' }
        ]
      },
      {
        link: '#!',
        text: 'Catalog',
        listByCategory: [
          {
            heading: 'Women',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Dresses',
                href: './shop.html'
              },
              {
                option: 'Bags',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Boots',
                href: './shop.html'
              },
              {
                option: 'Jewelry',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Men',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Coats & Jackets',
                href: './shop.html'
              },
              {
                option: 'Bags',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Sneakers',
                href: './shop.html'
              },
              {
                option: 'Watches',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Kids',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Boots',
                href: './shop.html'
              }
            ]
          }
        ]
      },
      {
        link: '#!',
        text: 'Shop',
        list: [
          {
            col: [
              {
                heading: 'Shop',
                options: [
                  {
                    option: 'Default',
                    href: './shop.html'
                  },
                  {
                    option: 'Topbar',
                    href: './shop-topbar.html'
                  },

                  {
                    option: 'Collapse',
                    href: './shop-collapse.html'
                  },
                  {
                    option: 'Simple',
                    href: './shop-simple.html'
                  },
                  {
                    option: 'Masonry',
                    href: './shop-masonry.html'
                  }
                ]
              },
              {
                heading: 'Product',
                options: [
                  {
                    option: 'Default',
                    href: './product.html'
                  },
                  {
                    option: 'Images Left',
                    href: './product-images-left.html'
                  },

                  {
                    option: 'Image Grid',
                    href: './product-image-grid.html'
                  },
                  {
                    option: 'Image Slider',
                    href: './product-image-slider.html'
                  },
                  {
                    option: 'Images Stacked',
                    href: './product-images-stacked.html'
                  }
                ]
              }
            ]
          },
          {
            col: [
              {
                heading: 'Support',
                options: [
                  {
                    option: 'Shopping Cart',
                    href: './shopping-cart.html'
                  },
                  {
                    option: 'Checkout',
                    href: './checkout.html'
                  },

                  {
                    option: 'Order Completed',
                    href: './order-completed.html'
                  },
                  {
                    option: 'Shipping & Returns',
                    href: './shipping-and-returns.html'
                  }
                ]
              },
              {
                heading: 'Account',
                options: [
                  {
                    option: 'Order',
                    href: './account-order.html'
                  },
                  {
                    option: 'Orders',
                    href: './account-orders.html'
                  },

                  {
                    option: 'Wishlist',
                    href: './account-wishlist.html'
                  },
                  {
                    option: 'Personal Info',
                    href: './account-personal-info.html'
                  },
                  {
                    option: 'Addresses',
                    href: './account-addresses.html'
                  },
                  {
                    option: 'Addresses: New',
                    href: './account-addresses-edit.html'
                  }
                ]
              }
            ]
          },
          {
            col: [
              {
                heading: null,
                options: [
                  {
                    option: 'Payment',
                    href: './account-Payment.html'
                  },
                  {
                    option: 'Payment: New',
                    href: './account-payment-edit.html'
                  },

                  {
                    option: 'Payment: Choose',
                    href: './account-payment-choose.html'
                  },
                  {
                    option: 'Auth',
                    href: './auth.html'
                  }
                ]
              },
              {
                heading: 'Modals',
                options: [
                  {
                    option: 'Newsletter: Horizontal',
                    href: '#modalNewsletterHorizontal'
                  },
                  {
                    option: 'Newsletter: Vertical',
                    href: '#modalNewsletterHorizontal'
                  },

                  {
                    option: 'Product',
                    href: '#modalProduct'
                  },
                  {
                    option: 'Search',
                    href: '#modalSearch'
                  },
                  {
                    option: 'Shopping Cart',
                    href: '#modalShoppingCart'
                  },
                  {
                    option: 'Size Chart',
                    href: '#modalSizeChart'
                  },
                  {
                    option: 'Wait List',
                    href: '#modalWaitList'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        link: '#!',
        text: 'Pages',
        list: [
          { option: 'About', href: './about.html' },
          { option: 'Contact Us', href: './contact-us.html' },
          { option: 'Store Locator', href: './store-locator.html' },
          { option: 'FAQ', href: './faq.html' },
          { option: 'Coming Soon', href: './coming-soon.html' },
          { option: '404', href: './404.html' }
        ]
      },
      {
        link: '#!',
        text: 'Blog',
        list: [
          { option: 'Blog', href: './blog.html' },
          { option: 'Blog Post', href: './blog-post.html' }
        ]
      },
      {
        link: './docs/getting-started.html',
        text: 'Docs'
      }
    ],
    regions: [
      {
        href: '#!',
        text: 'United States',
        alt: 'USA'
      },
      {
        href: '#!',
        text: 'Canada',
        alt: 'Canada'
      },
      {
        href: '#!',
        text: 'Germany',
        alt: 'Germany'
      }
    ],
    exchangeRate: [
      { href: '#', text: 'USD' },
      { href: '#', text: 'EUR' }
    ],
    languages: [
      { href: '#', text: 'English' },
      { href: '#', text: 'French' },
      { href: '#', text: 'German' }
    ]
  }),
  components: {}
}
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
}

.navbar-topbar {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
}

.navbar-toggler {
  padding: 0.25rem 0;
  font-size: 0.9375rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar:not(.navbar-vertical).navbar-expand-xl .navbar-nav:first-child {
    margin-left: -1rem;
  }
}

/* logo */
.navbar-brand {
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.75rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand {
  font-weight: 600;
}
.navbar-light .navbar-brand {
  color: #111;
}
</style>
