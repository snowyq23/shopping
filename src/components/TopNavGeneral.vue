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
            <li
              class="nav-item"
              v-for="(item, i) in menu"
              :key="i"
              :class="{
                'dropdown hovered': item.text !== 'Docs',
                'position-static': item.isStatic
              }"
            >
              <!-- Toggle -->
              <a
                class="nav-link"
                data-toggle="dropdown"
                :href="item.link"
                aria-expanded="true"
                >{{ item.text }}</a
              >

              <!-- Menu -->
              <!-- OF `Home`, `Pages`, `Blog` -->
              <div
                class="dropdown-menu"
                v-if="
                  item.text === 'Home' ||
                  item.text === 'Pages' ||
                  item.text === 'Blog'
                "
              >
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li
                        class="list-styled-item"
                        v-for="(opt, j) in item.list"
                        :key="j"
                      >
                        <a class="list-styled-link" :href="opt.href">{{
                          opt.option
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Menu -->
              <!-- OF `Shop` -->
              <div
                class="dropdown-menu"
                style="min-width: 650px"
                v-if="item.text === 'Shop'"
              >
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="row">
                      <div class="col" v-for="(tab, i) in item.list" :key="i">
                        <!-- Heading -->
                        <div
                          class="mb-5 font-weight-bold"
                          v-if="tab.col[0].heading !== null"
                        >
                          {{ tab.col[0].heading }}
                        </div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li
                            class="list-styled-item"
                            v-for="(opt, j) in tab.col[0].options"
                            :key="j"
                          >
                            <a class="list-styled-link" :href="opt.href">{{
                              opt.option
                            }}</a>
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div
                          class="mb-5 font-weight-bold"
                          v-if="tab.col[1].heading !== null"
                        >
                          {{ tab.col[1].heading }}
                        </div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li
                            class="list-styled-item"
                            v-for="(opt, j) in tab.col[1].options"
                            :key="j"
                          >
                            <a class="list-styled-link" :href="opt.href">{{
                              opt.option
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Menu -->
              <!-- OF `Catalog` -->
              <div
                class="dropdown-menu w-100"
                v-if="item.text === 'Catalog'"
                id="catalogTab"
              >
                <!-- Tabs -->
                <form class="mb-2 mb-lg-0 border-bottom-lg">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <!-- Nav -->
                        <v-tabs
                          v-model="tab"
                          class="
                            nav nav-tabs nav-overflow
                            font-size-xs
                            border-bottom border-bottom-lg-0
                          "
                          slider-color="#ff6f61"
                        >
                          <v-tab
                            class="tab"
                            v-for="category in categoryTab"
                            :key="category"
                          >
                            <a class="nav-link text-uppercase" href="#navTab">
                              {{ category }}
                            </a>
                          </v-tab>
                        </v-tabs>
                      </div>
                    </div>
                  </div>
                </form>

                <!-- Tab content -->
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="tab-content">
                      <v-tabs-items
                        v-model="tab"
                        class="tab-pane fade show"
                        id="navTab"
                        active-class="active"
                      >
                        <v-tab-item
                          v-for="category in categoryTab"
                          :key="category"
                          class="container"
                          transition="fade-transition"
                        >
                          <!-- <div class="container"> -->
                          <div class="row">
                            <div
                              class="col-6 col-md"
                              v-for="(tab, j) in item.listByCategory"
                              :key="j"
                            >
                              <!-- Heading -->
                              <div class="mb-5 font-weight-bold">
                                {{ tab.heading }}
                              </div>

                              <!-- Links -->
                              <ul class="list-styled mb-6 mb-md-0 font-size-sm">
                                <li
                                  class="list-styled-item"
                                  v-for="(opt, k) in tab.options"
                                  :key="k"
                                >
                                  <a
                                    class="list-styled-link"
                                    :href="tab.href"
                                    >{{ opt.option }}</a
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
                                    justify-content-center
                                  "
                                >
                                  <div class="text-center">
                                    <a
                                      class="btn btn-white stretched-link"
                                      href="./shop.html"
                                    >
                                      Shop Sweaters
                                      <i class="fa fa-arrow-right ml-2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- </div> -->
                        </v-tab-item>
                      </v-tabs-items>
                    </div>
                  </div>
                </div>
              </div>
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
            <li class="nav-item ml-lg-n4" @click.stop="showShoppingCart = true">
              <a class="nav-link" data-toggle="modal" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </a>
              <cart v-model="showShoppingCart" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cart from '../components/Cart'

export default {
  name: 'TopNavGeneral',
  data: () => ({
    tab: null,
    categoryTab: ['Women', 'Men', 'Kids'],
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
        ],
        isStatic: false
      },
      {
        link: '#!',
        text: 'Catalog',
        listByCategory: [
          {
            heading: 'Clothing',
            options: [
              {
                option: 'All Clothing',
                href: './shop.html'
              },
              {
                option: 'Blouses & Shirts',
                href: './shop.html'
              },
              {
                option: 'Coats & Jackets',
                href: './shop.html'
              },
              {
                option: 'Dresses',
                href: './shop.html'
              },
              {
                option: 'Hoodies & Sweats',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Jeans',
                href: './shop.html'
              },
              {
                option: 'Jumpers & Cardigans',
                href: './shop.html'
              },
              {
                option: 'Leggings',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Shoes & Boots',
            options: [
              {
                option: 'All Shoes & Boots',
                href: './shop.html'
              },
              {
                option: 'Branded Shoes',
                href: './shop.html'
              },
              {
                option: 'Boots',
                href: './shop.html'
              },
              {
                option: 'Heels',
                href: './shop.html'
              },
              {
                option: 'Trainers',
                href: './shop.html'
              },
              {
                option: 'Sandals',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Wide Fit Shoes',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Bags & Accessories',
            options: [
              {
                option: 'All Bags & Accessories',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Bags & Purses',
                href: './shop.html'
              },
              {
                option: 'Luggage',
                href: './shop.html'
              },
              {
                option: 'Belts',
                href: './shop.html'
              },
              {
                option: 'Hats',
                href: './shop.html'
              },
              {
                option: 'Hair Accessories',
                href: './shop.html'
              },
              {
                option: 'Jewellery',
                href: './shop.html'
              },

              {
                option: 'Travel Accessories',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Collections',
            options: [
              {
                option: 'All Collections',
                href: './shop.html'
              },
              {
                option: 'Occasionwear',
                href: './shop.html'
              },
              {
                option: 'Going Out',
                href: './shop.html'
              },
              {
                option: 'Workwear',
                href: './shop.html'
              },
              {
                option: 'Holiday Shop',
                href: './shop.html'
              },
              {
                option: 'Jean Fit Guide',
                href: './shop.html'
              }
            ]
          }
        ],
        isStatic: true
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
        ],
        isStatic: false
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
        ],
        isStatic: false
      },
      {
        link: '#!',
        text: 'Blog',
        list: [
          { option: 'Blog', href: './blog.html' },
          { option: 'Blog Post', href: './blog-post.html' }
        ],
        isStatic: false
      },
      {
        link: './docs/getting-started.html',
        text: 'Docs',
        isStatic: false
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
    ],
    showShoppingCart: false
  }),
  components: { Cart }
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

#navTab li {
  margin-left: 0;
}
#catalogTab .v-tab--active > .nav-link,
#catalogTab .v-tab:hover > .nav-link {
  color: #ff6f61;
}

/* button styling */
.btn > .fa-arrow-left,
.btn > .fa-arrow-right {
  transition: all 0.2s ease-in-out;
  transition-property: transform;
}
.card-img-overlay:hover .btn > .fa-arrow-left,
.card-img-overlay:hover .btn > .fa-arrow-right {
  transform: translateX(50%);
}
</style>
